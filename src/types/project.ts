import { StaticImageData } from "next/image";

export interface ProjectPost {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  techStack: string[];
  githubUrl: string;
  image?: { imgUrl: string; subject: string }[];
}
