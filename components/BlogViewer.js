'use client'
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useState } from "react";
import { allBlogs } from '../.contentlayer/generated';
import Text from "./Text";

/*  A no‑op MDX module so the hook can run on every render  */
const PLACEHOLDER_MDX = `
function MDXContent() { return null }
return { default: MDXContent }
`;
export default function BlogViewer() {
    
    const [slug, setSlug] = useState(null)

    function formatDate(dateString) {
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(new Date(dateString))
    }
    const post = allBlogs.find((p) => p.slug === slug)

    /* ── Call hook every render ── */
    const PostComponent = useMDXComponent(
        post ? post.body.code : PLACEHOLDER_MDX
    )

    /* ── Blog index ── */
    if (!post) {
        return (
            <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
                <h1 className="text-2xl font-bold">Blog</h1>
                <Text txt="I’ll be posting about AI evaluation, public sector applications, and what goes wrong when models meet the real world. Check back in a few days for updates (25 July 2025)." />
                <br></br>
                <ul>
                    {allBlogs.map((p) => (
                        <li key={p._id} className="my-2">
                            <button
                                type="button"
                                onClick={() => setSlug(p.slug)}
                                className="presentation-button mr-2 mt-2"
                            >
                                {p.title}
                            </button>
                            <span className="ml-2 text-sm no-hover-inherit">
                                {formatDate(p.date)}
                            </span>
                            <div><p>{p.summary}</p></div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
      
    /* ── Single post ── */
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
                {formatDate(post.date)}
            </p>

            <PostComponent />
        </div>
    )

}
