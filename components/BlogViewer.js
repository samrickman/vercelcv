'use client'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { allBlogs } from '../.contentlayer/generated'
import Text from './Text'

const PLACEHOLDER_MDX = `
function MDXContent() { return null }
return { default: MDXContent }
`

export default function BlogViewer({ initialSlug = null, useBlogRoutes = false }) {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()
  const slug = sp.get('post') ?? initialSlug

  const post = useMemo(
    () => allBlogs.find((p) => p.slug === slug) ?? null,
    [slug]
  )
  const posts = useMemo(
    () => [...allBlogs].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  )

  function formatDate(dateString) {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit', month: 'long', year: 'numeric',
    }).format(new Date(dateString))
  }

  function openPost(nextSlug) {
    if (useBlogRoutes) {
      router.replace(`/blog/${nextSlug}`, { scroll: false })
      return
    }

    const params = new URLSearchParams(sp)
    params.set('post', nextSlug)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  function backToList() {
    if (useBlogRoutes) {
      router.push('/#blog', { scroll: false })
      return
    }

    const params = new URLSearchParams(sp)
    params.delete('post')
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const PostComponent = useMDXComponent(post ? post.body.code : PLACEHOLDER_MDX)

  if (!post) {
    return (
      <div className="opaque-bg prose dark:prose-invert max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Writing</h1>
        <Text txt="Occasional notes on AI agents, evaluation, deployment and the practical trade-offs that appear when models are used in real services." />
        <br />
        <ul>
          {posts.map((p) => (
            <li key={p._id} className="my-2">
              <button
                type="button"
                onClick={() => openPost(p.slug)}
                className="presentation-button mr-2 mt-2"
              >
                {p.title}
              </button>
              <span className="ml-2 text-sm no-hover-inherit">
                {formatDate(p.date)}
              </span>
              <p className="mt-0">{p.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
      <button
        type="button"
        onClick={backToList}
        className="text-sm text-gray-500 mb-4"
      >
        ← Back to writing
      </button>

      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{formatDate(post.date)}</p>

      <article className="blog-post">
        <PostComponent />
      </article>
    </div>
  )
}
