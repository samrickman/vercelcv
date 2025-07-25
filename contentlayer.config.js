import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        summary: { type: 'string', required: false },
    },
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Blog],
})
