import { OstDocument } from 'outstatic';
import { load } from 'outstatic/server';

export type About = OstDocument<{
  darkBackground?: boolean;
  imageOnRight?: boolean;
}>;

export type AboutCollection = About[];

export const getAbout = async (): Promise<AboutCollection> => {
  const db = await load();
  const collection: AboutCollection = await db
    .find<About>({ collection: 'about', status: 'published' })
    .project(['coverImage', 'darkBackground', 'imageOnRight', 'title', 'content'])
    .sort({ publishedDate: 1 })
    .toArray();
  return collection;
};

export type FAQ = OstDocument;

export type FAQCollection = FAQ[];

export const getFrequentlyAskedQuestions = async (): Promise<FAQCollection> => {
  const db = await load();
  const collection: FAQCollection = await db
    .find<FAQ>({ collection: 'frequently-asked-questions', status: 'published' })
    .project(['title', 'content', 'slug'])
    .sort({ publishedDate: 1 })
    .toArray();
  return collection;
};

export type Testimonial = OstDocument;

export type TestimonialCollection = Testimonial[];

export const getTestimonials = async (): Promise<FAQCollection> => {
  const db = await load();
  const collection: FAQCollection = await db
    .find<FAQ>({ collection: 'testimonials', status: 'published' })
    .project(['author', 'coverImage', 'title', 'content', 'slug'])
    .sort({ publishedDate: 1 })
    .toArray();
  return collection;
};
