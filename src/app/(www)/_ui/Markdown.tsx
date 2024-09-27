'use client';

import React, { Suspense } from 'react';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

export interface MarkdownProps {
  content: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const html = React.useMemo(() => {
    return remark().use(remarkParse).use(remarkGfm).use(remarkHtml).processSync(content);
  }, [content]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Suspense>
  );
};

Markdown.displayName = 'Markdown';

export default Markdown;
