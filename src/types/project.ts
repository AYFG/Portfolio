export interface ProjectPost {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  thumbnail: string;
  techStack: string[];
  githubUrl: string;
  mainFeatures?: { title: string; detail: string }[];
  troubleShooting?: { title: string; detail: string }[];
  image?: { imgUrl: string; subject: string }[];
}
