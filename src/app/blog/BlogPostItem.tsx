import { BlogPost } from "@/types/blog";
import React from "react";

interface BlogPostItemProps {
  post: BlogPost;
  onSelect: (post: BlogPost) => void;
}

export default function BlogPostItem({ post, onSelect }: BlogPostItemProps) {
  return (
    <article
      className="border-b border-gray-200 py-8 last:border-b-0 cursor-pointer group"
      onClick={() => onSelect(post)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(post)}
      aria-label={`${post.title} 게시물 보기`}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-900 no-underline transition group-hover:text-[#00ab6c]">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-3">{post.summary}</p>
      <p className="text-sm text-gray-500">게시일: {post.publishedDate}</p>
    </article>
  );
}
