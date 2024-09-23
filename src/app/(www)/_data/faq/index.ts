import fs from 'node:fs/promises';
import path from 'node:path';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { fileURLToPath } from 'url';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));

export type FAQ = {
  title: string;
  text: string;
  html?: string;
};

export const getFAQ = async (): Promise<FAQ[]> => {
  const fileNames = await fs.readdir(__dirname);
  return await Promise.all(
    fileNames
      .filter((fileName) => /\.mdx?$/.test(fileName))
      .map(async (fileName) => {
        const fullName = path.join(__dirname, fileName);
        const contents = await fs.readFile(fullName, { encoding: 'utf-8' });

        const { content, data } = grayMatter(contents);
        const html = await remark()
          .use(remarkParse)
          .use(remarkGfm)
          .use(remarkHtml)
          .process(content);
        return {
          title: data?.title || path.parse(fileName).name,
          text: contents,
          html: html.toString(),
        } as FAQ;
      }),
  );
};
