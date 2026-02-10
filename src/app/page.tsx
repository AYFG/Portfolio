"use client";

import BlogDetail from "@/app/(blog)/BlogDetail";
import BlogList from "@/app/(blog)/page";
import Hero from "@/components/layout/Hero";
import CareerList from "@/app/(career)/CareerList";
import ProjectList from "@/app/(project)/ProjectList";
import { BlogPost } from "@/types/blog";
import React, { useState, useEffect } from "react";
import About from "@/components/About";
export default function Home() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView("blogDetail");
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setCurrentView("home");
  };

  return (
    <>
      {currentView === "home" && (
        <>
          <Hero />

          <CareerList />
          <ProjectList />
          {/* <BlogList onSelectPost={handleSelectPost} /> */}
        </>
      )}
      {currentView === "blogDetail" && selectedPost && (
        <BlogDetail post={selectedPost} onBack={handleBackToList} />
      )}
    </>
  );
}
