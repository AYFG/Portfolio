import { ProjectPost } from "@/types/project";
import Image from "next/image";

interface ProjectImageGalleryProps {
  title: string;
  images: ProjectPost["image"];
}

export default function ProjectImageGallery({ title, images }: ProjectImageGalleryProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">상세 이미지</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-4">
        {images?.map((img, index) => (
          <div key={img.imgUrl}>
            <div className="overflow-hidden rounded-lg border">
              <Image
                src={img.imgUrl}
                alt={`${title} 상세 이미지 ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            {img.subject && <p className="text-center text-md text-gray-600 mt-2">{img.subject}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
