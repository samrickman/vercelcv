import BlogViewer from "@/components/BlogViewer";
import ContactFooter from "@/components/ContactFooter";
import PageHeader from "@/components/PageHeader";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const baseUrl = "https://www.samrickman.com";

function getPost(slug) {
  return allBlogs.find((post) => post.slug === slug) ?? null;
}

export function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Sam Rickman",
    };
  }

  const title = `${post.title} | Sam Rickman`;
  const description = post.summary ?? "Writing by Sam Rickman.";
  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: ["Sam Rickman"],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen relative z-0">
      <PageHeader />
      <Suspense fallback={null}>
        <BlogViewer initialSlug={slug} useBlogRoutes />
      </Suspense>
      <ContactFooter />
    </div>
  );
}
