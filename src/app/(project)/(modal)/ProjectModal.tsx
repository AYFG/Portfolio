import { ProjectPost } from "@/types/project";
import Image from "next/image";
import ProjectImageGallery from "../ProjectImageGallery";
import Markdown from "@/components/markdown/Markdown";

interface ProjectModalProps {
  project: ProjectPost | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white p-6 md:p-8 rounded-lg w-full max-w-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-transparent border-0 text-4xl font-light cursor-pointer text-gray-500 hover:text-gray-800"
          onClick={onClose}
          aria-label="프로젝트 상세 정보 닫기"
        >
          &times;
        </button>
        <Image
          src={project.thumbnail}
          alt={`${project.title} 썸네일`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-md mb-6"
        />

        <h2 id="modal-title" className="text-3xl font-bold text-gray-900 mb-2">
          {project.title}
        </h2>
        <p className="text-md text-gray-500 mb-3">{project.date}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <Markdown>{project.longDescription}</Markdown>
        <div className="space-y-8 mt-8">
          <section>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b ">⚙️ 주요 기능 및 특징</h3>
            {project.mainFeatures?.map((feature, idx) => (
              <div key={idx}>
                <h4 className="font-medium text-md block my-2 p-3 bg-[#efeff1]">{feature.title}</h4>
                <Markdown>{feature.detail}</Markdown>
              </div>
            ))}
          </section>
          <section aria-labelledby="project-troubleShooting">
            <h3 id="project-troubleShooting" className="text-xl font-bold mb-4 pb-2 border-b">
              🔍 문제 해결
            </h3>

            {project.troubleShooting?.map((item, idx) => (
              <div key={idx}>
                <h4 className="font-medium text-md block my-2 p-3 bg-[#efeff1]">{item.title}</h4>
                <div className="prose prose-sm max-w-none">
                  <Markdown>{item.detail}</Markdown>
                </div>
              </div>
            ))}
          </section>
        </div>
        {project.image && <ProjectImageGallery title={project.title} images={project.image} />}
        <a
          href={project.githubUrl}
          className="inline-block bg-[#00ab6c] text-white px-6 py-2 rounded-full text-base font-medium hover:opacity-85 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub에서 보기
        </a>
      </div>
    </div>
  );
}
