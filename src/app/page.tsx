"use client";

import BlogDetail from "@/app/blog/BlogDetail";
import BlogList from "@/app/blog/page";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import { BlogPost } from "@/types/blog";
import React, { useState, useEffect } from "react";
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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {currentView === "home" && (
          <>
            <Hero />
            <ProjectList />
            <BlogList onSelectPost={handleSelectPost} />
          </>
        )}
        {currentView === "blogDetail" && selectedPost && (
          <BlogDetail post={selectedPost} onBack={handleBackToList} />
        )}
      </main>
      <Footer />
    </div>
  );
}
