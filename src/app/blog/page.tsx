import React from "react";
import BlogPostItem from "./BlogPostItem";
import blogPostsData from "@/data/blogPostsData";
import { BlogPost } from "@/types/blog";

interface BlogListProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogList({ onSelectPost }: BlogListProps) {
  return (
    <section id="blog" className="bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">글</h2>
        <div className="flex flex-col">
          {blogPostsData.map((post) => (
            <BlogPostItem key={post.id} post={post} onSelect={onSelectPost} />
          ))}
        </div>
      </div>
    </section>
  );
}
