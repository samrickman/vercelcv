import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  bodyType: 'mdx',
  fields: {
    title:   { type: 'string', required: true },
    date:    { type: 'date',   required: true },
    summary: { type: 'string' },
  },
  computedFields: {
    /** slug = file name without directory or extension */
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
})
