import { ProjectPost } from "@/types/project";
import Markdown from "@/components/markdown/Markdown";

interface CareerModalProps {
  career: ProjectPost | null;
  onClose: () => void;
}

export default function CareerModal({ career, onClose }: CareerModalProps) {
  if (!career) return null;

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
          aria-label="경력 상세 정보 닫기"
        >
          &times;
        </button>

        <h2 id="modal-title" className="text-3xl font-bold text-gray-900 mb-2">
          {career.title}
        </h2>
        <p className="text-md text-gray-500 mb-3">{career.date}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {career.techStack.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <Markdown>{career.longDescription}</Markdown>
        <div className="space-y-8 mt-8">
          <section>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b">📋 진행한 업무</h3>
            {career.mainFeatures?.map((feature, idx) => (
              <div key={idx}>
                <h4 className="font-medium text-md block my-2 p-3 pl-4 bg-[#eebebe]">
                  {feature.title}
                </h4>
                <Markdown>{feature.detail}</Markdown>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
