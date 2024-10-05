import { Metadata } from 'next';

import { FAQ, Markdown, PageTitle } from '@www/_ui';
import { getFrequentlyAskedQuestions } from '@www/_data/outstatic';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
};

export default async function FaqPage() {
  const faqs = await getFrequentlyAskedQuestions();

  return (
    <>
      <PageTitle breadcrumbTitle="Frequently Asked Questions" />
      <FAQ
        questions={faqs.map((question) => ({
          title: question.title,
          body: <Markdown content={question.content} />,
        }))}
      />
    </>
  );
}
