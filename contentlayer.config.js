import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm'; // to render tables (remark-gfm to be 2.0.0 and not higher - thi sis in pnpm-lock.yaml)
import remarkMath from 'remark-math';
import rehypeEnsureProps from './lib/rehypeEnsureProps.js';


// This tells Contentlayer/MDX to use the React JSX runtime (for blog)
process.env.NODE_ENV = 'production' // or 'production' during builds
process.env.CONTENTLAYER_CLI = 'next'
export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  bodyType: 'mdx',                     // compiled component + code + html
  fields: {
    title:   { type: 'string', required: true },
    date:    { type: 'date',   required: true },
    summary: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileName.replace(/\.mdx?$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
    mdx: {
    remarkPlugins: [remarkMath, remarkGfm], // tables and equations
    rehypePlugins: [rehypeEnsureProps, rehypeKatex],
  },
})