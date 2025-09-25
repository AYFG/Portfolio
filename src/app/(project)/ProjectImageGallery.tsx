import { useState } from "react";
import { ProjectPost } from "@/types/project";
import Image from "next/image";

interface ProjectImageGalleryProps {
  title: string;
  images: ProjectPost["image"];
}

export default function ProjectImageGallery({ title, images }: ProjectImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imgUrl: string) => {
    setSelectedImage(imgUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="my-8">
      <div className="flex items-center justify-between border-b pb-2">
        <h3 className="text-xl font-bold text-gray-800">🖼️ 상세 이미지</h3>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-sm text-blue-600 hover:underline"
        >
          {isOpen ? "접기 ▲" : "펼치기 ▼"}
        </button>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-4 transition-all duration-300">
          {images?.map((img, index) => (
            <div
              key={img.imgUrl}
              className="cursor-pointer group"
              onClick={() => handleImageClick(img.imgUrl)}
            >
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={img.imgUrl}
                  alt={`${title} 상세 이미지 ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {img.subject && (
                <p className="text-center text-md text-gray-600 mt-2">{img.subject}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 상세 보기"
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="확대된 상세 이미지"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute -top-2 -right-2 m-4 text-white text-5xl font-bold"
              onClick={handleCloseModal}
              aria-label="이미지 뷰어 닫기"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
