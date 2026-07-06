import BlogViewer from "@/components/BlogViewer";
import ContactFooter from "@/components/ContactFooter";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";

export const metadata = {
  title: "Writing | Sam Rickman",
  description: "Occasional writing about AI agents, evaluation, deployment and public-service AI systems.",
  alternates: {
    canonical: "https://www.samrickman.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen relative z-0">
      <PageHeader />
      <Suspense fallback={null}>
        <BlogViewer useBlogRoutes />
      </Suspense>
      <ContactFooter />
    </div>
  );
}
