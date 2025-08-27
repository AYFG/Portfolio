import { StaticImageData } from "next/image";

export interface ProjectPost {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: StaticImageData;
  techStack: string[];
  githubUrl: string;
}
