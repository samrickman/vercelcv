import { defineDocumentType, makeSource } from 'contentlayer/source-files'
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
})