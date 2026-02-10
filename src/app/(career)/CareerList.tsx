"use client";

import React, { useState } from "react";
import careersData from "@/data/careersData";
import ProjectCard from "@/app/(project)/ProjectCard";
import CareerModal from "@/app/(career)/(modal)/CareerModal";
import { ProjectPost } from "@/types/project";

export default function CareerList() {
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  const handleSelectProject = (project: ProjectPost) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const currentProjectData = selectedProject
    ? careersData.find((p) => p.id === selectedProject.id) || null
    : null;

  return (
    <section id="careers" className="py-20 sm:py-24 border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">경력</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careersData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelectProject}
              showImage={false}
            />
          ))}
        </div>
      </div>
      <CareerModal career={currentProjectData} onClose={handleCloseModal} />
    </section>
  );
}
