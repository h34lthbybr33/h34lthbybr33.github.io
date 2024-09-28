import { Metadata } from 'next';
import { OstDocument } from 'outstatic';
import { load } from 'outstatic/server';

import { FAQ, Markdown, PageTitle } from '@www/_ui';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
};

type FAQ = OstDocument;

export default async function Faq() {
  const db = await load();
  const faqs = await db
    .find<FAQ>({
      collection: 'frequently-asked-questions',
      status: 'published',
    })
    .project(['title', 'publishedAt', 'slug', 'content'])
    .sort({ publishedAt: 1 })
    .toArray();

  return (
    <>
      <PageTitle breadcrumbTitle="FAQ" />
      <FAQ
        questions={faqs.map((question) => ({
          title: question.title,
          body: <Markdown content={question.content} />,
        }))}
      />
    </>
  );
}
