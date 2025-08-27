import { BlogPost } from "@/types/blog";

export interface BlogPostItemProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogDetail({ post, onBack }: BlogPostItemProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="mb-8 text-[#00ab6c] font-medium transition hover:underline"
        >
          &larr; 모든 글 보기
        </button>
        <article>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-base text-gray-500 mb-8">게시일: {post.publishedDate}</p>
          <div className="prose lg:prose-xl max-w-none text-gray-800 text-lg leading-relaxed space-y-6">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
