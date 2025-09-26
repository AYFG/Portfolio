import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "@/app/(project)/(modal)/ProjectModal";
import projectsData from "@/data/projectsData";
import { ProjectPost } from "@/types/project";

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  const handleSelectProject = (project: ProjectPost) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const currentProjectData = selectedProject
    ? projectsData.find((p) => p.id === selectedProject.id) || null
    : null;

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={handleSelectProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={currentProjectData} onClose={handleCloseModal} />
    </section>
  );
}
