'use client'

import { useState } from 'react'
import { allBlogs } from '../.contentlayer/generated'

/* a no‑op component to keep render logic simple */
const Placeholder = () => null

export default function BlogViewer () {
  const [slug, setSlug] = useState(null)

  const post = allBlogs.find((p) => p.slug === slug)
  const PostComponent = post ? post.body.component : Placeholder   // ← no eval

  /* blog index */
  if (!post) {
    return (
      <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
        <h1>Blog</h1>
        <ul>
          {allBlogs.map((p) => (
            <li key={p._id} className="my-2">
              <button
                type="button"
                onClick={() => setSlug(p.slug)}
                className="text-blue-600 hover:underline"
              >
                {p.title}
              </button>
              <span className="ml-2 text-sm text-gray-500">
                {new Intl.DateTimeFormat('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(p.date))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  /* single post */
  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
      <button
        type="button"
        onClick={() => setSlug(null)}
        className="text-sm text-gray-500 mb-4"
      >
        ← Back to list
      </button>

      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">
        {new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).format(new Date(post.date))}
      </p>

      <PostComponent />   {/* ← renders the compiled MDX, no hooks, no eval */}
    </div>
  )
}
