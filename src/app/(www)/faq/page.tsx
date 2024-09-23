import { FAQ, PageTitle } from '@www/_ui';
import { Metadata } from 'next';
import { getFAQ } from '@www/_data/faq/index';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
};

export default async function Faq() {
  const faqs = await getFAQ();

  return (
    <>
      <PageTitle breadcrumbTitle="FAQ" />
      <FAQ
        questions={faqs.map((question) => ({
          title: question.title,
          body: (
            <div dangerouslySetInnerHTML={{ __html: question.html || question.text }} />
          ),
        }))}></FAQ>
    </>
  );
}
