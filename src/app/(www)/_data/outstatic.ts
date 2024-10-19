import { type OstDocument } from 'outstatic';
import { load } from 'outstatic/server';

export type Tag =
  | {
      value: string;
      label: string;
    }
  | undefined;
export type TagWithMetadata = Tag & {
  count: number;
};
export type TagCollection = Tag[] | TagWithMetadata[];

// TODO: Create an underlying class that handles the fetching and ensuring
// the content is published, and the necessary field(s) are retrieved.

export type About = OstDocument<{
  darkBackground?: boolean;
  imageOnRight?: boolean;
}>;
export type AboutCollection = About[];
const AboutCollectionName = 'about';
const AboutProjection = [
  'coverImage',
  'darkBackground',
  'imageOnRight',
  'title',
  'content',
];

export const getAbout = async (): Promise<AboutCollection> => {
  const db = await load();
  const collection: AboutCollection = await db
    .find<About>({ collection: AboutCollectionName, status: 'published' })
    .project(AboutProjection)
    .sort({ publishedDate: 1 })
    .toArray();
  return collection;
};

export type BlogPost = OstDocument & {
  tags: Tag[];
};
export type BlogPostCollection = BlogPost[];
const BlogPostCollectionName = 'posts';
const BlogProjection = [
  'author',
  'coverImage',
  'title',
  'description',
  'content',
  'slug',
  'publishedAt',
  'tags',
];

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const db = await load();
  const match: BlogPost = await db
    .find<BlogPost>({
      collection: BlogPostCollectionName,
      status: 'published',
      slug,
    })
    .project(BlogProjection)
    .first();
  return match;
};
export const getBlogPosts = async (limit?: number): Promise<BlogPostCollection> => {
  const db = await load();
  let query = db
    .find<BlogPost>({ collection: BlogPostCollectionName, status: 'published' })
    .project(BlogProjection)
    .sort({ publishedAt: -1 });
  if (typeof limit !== 'undefined') {
    query = query.limit(limit);
  }
  const collection: BlogPostCollection = await query.toArray();
  return collection;
};
export const getBlogPostsByTag = async (
  tagValue: string,
): Promise<BlogPostCollection> => {
  const db = await load();
  const collection: BlogPostCollection = await db
    .find<BlogPost>({
      collection: BlogPostCollectionName,
      status: 'published',
      tags: {
        $elemMatch: {
          value: tagValue,
        },
      },
    })
    .project(BlogProjection)
    .sort({ publishedAt: -1 })
    .toArray();
  return collection;
};
export const getBlogPostTag = async (value: string): Promise<Tag> => {
  const allTags = await getBlogPostTags();
  return allTags.find((tag) => tag && tag.value === value);
};
export const getBlogPostTags = async (): Promise<TagCollection> => {
  const allBlogPosts = await getBlogPosts();
  // TODO: Track count and bubble up as TagWithMetadata
  const tags: TagCollection = allBlogPosts
    .map((post) => post.tags)
    .reduce((accumulator, tags) => {
      tags.forEach((tag) => {
        if (tag && !accumulator.find((x) => x && x.value == tag.value)) {
          accumulator.push(tag);
        }
      });
      return accumulator;
    }, [] as TagCollection);
  return tags;
};

export type FAQ = OstDocument;
export type FAQCollection = FAQ[];
const FAQCollectionName = 'frequently-asked-questions';
const FAQProjection = ['title', 'content', 'slug'];

export const getFrequentlyAskedQuestions = async (): Promise<FAQCollection> => {
  const db = await load();
  const collection: FAQCollection = await db
    .find<FAQ>({ collection: FAQCollectionName, status: 'published' })
    .project(FAQProjection)
    .sort({ publishedAt: -1 })
    .toArray();
  return collection;
};

export type Testimonial = OstDocument;
export type TestimonialCollection = Testimonial[];
const TestimonialCollectionName = 'testimonials';
const TestimonialProjection = ['author', 'coverImage', 'title', 'content', 'slug'];

export const getTestimonials = async (): Promise<FAQCollection> => {
  const db = await load();
  const collection: FAQCollection = await db
    .find<FAQ>({ collection: TestimonialCollectionName, status: 'published' })
    .project(TestimonialProjection)
    .sort({ publishedAt: -1 })
    .toArray();
  return collection;
};
