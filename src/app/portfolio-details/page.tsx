"use client";

import { useState } from "react";
import { projects } from "./project-data";
import { useLang } from "@/hooks/lang-context";
import Image from "next/image";

const categories = ["All", "Web", "Mobile", "AI", "Cloud"];
const PROJECTS_PER_PAGE = 6;

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };
  const { t } = useLang();
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl pt-20">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-red to-purple bg-clip-text text-transparent">
          {t("portfolioDetailTitle")}
        </h2>

        {/* Categories and Search */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8 gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-2xl transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-pink to-blue text-white"
                    : "bg-glass text-black"
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder= {t("portfolioSearch")}
            value={search}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-2xl bg-glass focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-glass rounded-2xl shadow-md p-4 hover:shadow-xl transition w-full max-w-sm"
            >
              <div className="bg-glass rounded-lg aspect-video flex items-center justify-center mb-2 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="font-bold text-primary">{project.name}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-4 flex-wrap">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-50"
            >
              {t("portfolioButtonPrev")}
            </button>
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === pageNumber
                      ? "bg-glass text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-50"
            >
              {t("portfolioButtonNext")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
