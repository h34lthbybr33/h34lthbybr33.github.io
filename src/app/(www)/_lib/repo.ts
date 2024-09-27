import fs from 'node:fs/promises';
import path from 'node:path';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { fileURLToPath } from 'url';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.join(__dirname, '../_data');

export type FAQ = {
  title: string;
  status: 'draft' | 'published' | string;
  slug: string;
  publishedAt: Date;
  text: string;
  html?: string;
};

export const getFAQ = async (): Promise<FAQ[]> => {
  const faqDirectory = path.join(dataDirectory, 'frequently-asked-questions');
  const fileNames = await fs.readdir(faqDirectory);
  return await Promise.all(
    fileNames
      .filter((fileName) => /\.mdx?$/.test(fileName))
      .map(async (fileName) => {
        const fullName = path.join(faqDirectory, fileName);
        const contents = await fs.readFile(fullName, { encoding: 'utf-8' });

        const { content, data } = grayMatter(contents);
        const html = await remark()
          .use(remarkParse)
          .use(remarkGfm)
          .use(remarkHtml)
          .process(content);
        return {
          title: data?.title || path.parse(fileName).name,
          status: data?.status,
          slug: data?.slug,
          publishedAt: data?.publishedAt ? new Date(data?.publishedAt) : new Date(),

          text: contents,
          html: html.toString(),
        } as FAQ;
      }),
  );
};
