'use client';

import React, { Suspense } from 'react';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeExternalLinks from 'rehype-external-links';

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Markdown: React.FC<MarkdownProps> = ({ content, ...props }) => {
  const html = React.useMemo(() => {
    return remark()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeExternalLinks, { target: '_blank' })
      .use(rehypeStringify)
      .processSync(content);
  }, [content]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div dangerouslySetInnerHTML={{ __html: html }} {...props} />
    </Suspense>
  );
};

Markdown.displayName = 'Markdown';

export default Markdown;
