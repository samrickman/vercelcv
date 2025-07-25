'use client'

import { useMDXComponent } from 'next-contentlayer/hooks';
import { useEffect, useState } from 'react';
import { allBlogs } from '../.contentlayer/generated';
import Text from "./Text";

/* ---  valid stub that the MDX runtime can eval  --- */
const PLACEHOLDER_MDX = `
function MDXContent() { return null }
return { default: MDXContent }
`;

export default function BlogViewer() {
    const [activeSlug, setActiveSlug] = useState(null)

    // find the current post (if any)
    const post = allBlogs.find(
        (p) => p._raw.flattenedPath === `blog/${activeSlug}`
    )

    /*  Hook is ALWAYS called, with real code or stub  */
    const MDXContent = useMDXComponent(post ? post.body.code : PLACEHOLDER_MDX)

    /* optional nicety: scroll to top when opening a post */
    useEffect(() => {
        if (post) window.scrollTo(0, 0)
    }, [post])

    function formatDate(dateString) {
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(new Date(dateString))
    }
    return (
        <div className="prose dark:prose-invert max-w-3xl mx-auto p-4">
            {!post ? (
                /* -------- blog index -------- */
                <>
                    <h1 className="text-2xl font-bold">Blog</h1>
                    <Text txt="I’ll be posting about AI evaluation, public sector applications, and what goes wrong when models meet the real world. Check back in a few days for updates (25 July 2025)." />
                    <br></br>
                    <ul>
                        {allBlogs.map((p) => (
                            <li key={p._id}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveSlug(p._raw.flattenedPath.replace('blog/', ''))
                                    }
                                    className="presentation-button mr-2 mt-2"
                                >
                                    {p.title}
                                </button>

                                <span className="ml-2 text-sm no-hover-inherit">{formatDate(p.date)}</span>
                                <div><p>{p.summary}</p></div>

                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                /* -------- single post -------- */
                <>
                    <button
                        onClick={() => setActiveSlug(null)}
                        className="text-sm text-gray-500 mb-4"
                    >
                        ← Back
                    </button>
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="text-sm font-bold">{formatDate(post.date)}</p>

                    <br></br>
                    <MDXContent />
                </>
            )}
        </div>
    )
}
