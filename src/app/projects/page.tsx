"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ArrowRight } from "lucide-react";
import { filterCategoryKeys, projects, sortOptions, CategoryKey } from "@/app/projects/projects-data";
import { useLang } from "@/hooks/lang-context";
import { TranslationKey } from "@/hooks/lang-context";
import "@/app/projects/projects.css";

export default function Home() {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState<CategoryKey>('catAll'); // Default: Show all projects
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Get translated category name
  const getCategoryName = (key: CategoryKey) => {
    return t(key as TranslationKey);
  };

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let result = projects.map(p => ({
      ...p,
      translatedTitle: t(p.titleKey),
      translatedDescription: t(p.descriptionKey)
    }));

    // Search filter
    if (searchQuery.trim()) {
      result = result.filter((project) =>
        project.translatedTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeFilter !== 'catAll') {
      // Category filter (only when not searching and not showing all)
      result = result.filter((project) => project.categoryKey === activeFilter);
    }
    // When activeFilter === 'catAll', show all projects (no filtering)

    // Sort
    switch (selectedSort) {
      case "A-Z":
        result = [...result].sort((a, b) => a.translatedTitle.localeCompare(b.translatedTitle));
        break;
      case "Z-A":
        result = [...result].sort((a, b) => b.translatedTitle.localeCompare(a.translatedTitle));
        break;
      case sortOptions[1]: // Cũ nhất / Oldest
        result = [...result].reverse();
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, activeFilter, selectedSort, t]);

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort);
    setSortOpen(false);
  };

  // Get translated sort option
  const getTranslatedSortOption = (option: string) => {
    switch (option) {
      case "Mới nhất":
        return t("projectsSortNewest");
      case "Cũ nhất":
        return t("projectsSortOldest");
      default:
        return option;
    }
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-body">
        {/* Title Section */}
        <motion.div
          className="title-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">{t("projectsPageTitle")}</h1>

          {/* Search Container */}
          <div className="search-container">
            <div className="search-input">
              <input
                type="text"
                placeholder={t("portfolioSearch") + "..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="search-icon" />
            </div>
          </div>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="mobile-filter-toggle">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="mobile-filter-btn"
          >
            <Filter className="w-5 h-5" />
            <span>{t("projectsFilter")}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileFilterOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Content Wrapper */}
        <div className="content-wrapper">
          {/* Filter Sidebar */}
          <motion.aside
            className={`filter-sidebar ${mobileFilterOpen ? "mobile-open" : ""}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Filter Header */}
            <div className="filter-header">
              <span>{t("projectsFilter")}</span>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.666 0C22.2182 0 22.6658 0.447864 22.666 1V6.17578C22.666 6.75251 22.4174 7.30186 21.9834 7.68164L12.6504 15.8477C11.8963 16.5075 10.7697 16.5075 10.0156 15.8477L0.682617 7.68164C0.248587 7.30186 0 6.75251 0 6.17578V1C0.000174949 0.447864 0.447823 0 1 0H21.666ZM1.33301 4.66699V6.66699H21.333V4.66699H1.33301Z" fill="currentColor" transform="translate(6, 5)"/>
                <path d="M4 10.3936L0 13.2266V0H4V10.3936Z" fill="currentColor" transform="translate(15, 17)"/>
              </svg>
            </div>

            <div className="filter-divider"></div>

            {/* Filter List */}
            <div className="filter-list">
              {filterCategoryKeys.map((categoryKey, index) => (
                <motion.div
                  key={index}
                  onClick={() => {
                    setActiveFilter(categoryKey);
                    setSearchQuery("");
                    setMobileFilterOpen(false);
                  }}
                  className={`filter-item ${activeFilter === categoryKey ? "active" : ""}`}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getCategoryName(categoryKey)}
                </motion.div>
              ))}
            </div>

            <div className="filter-divider"></div>

            {/* Sort Section */}
            <div className="sort-section">
              <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3.83331H14.2667" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 11.5H11.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 19.1667H8.13333" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19.7666 21L24.2666 16.25M19.7666 21L15.2666 16.25M19.7666 21L19.7666 2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div className="sort-content">
                <span className="sort-label">{t("projectsSortBy")}</span>
                <div className="sort-dropdown-wrapper">
                  <div className="sort-dropdown" onClick={() => setSortOpen(!sortOpen)}>
                    <span>{getTranslatedSortOption(selectedSort)}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
                  </div>

                  <AnimatePresence>
                    {sortOpen && (
                      <motion.div
                        className="sort-dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {sortOptions.map((sort, index) => (
                          <div
                            key={index}
                            onClick={() => handleSortSelect(sort)}
                            className={`sort-option ${selectedSort === sort ? "active" : ""}`}
                          >
                            {getTranslatedSortOption(sort)}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Projects Section */}
          <motion.main
            className="projects-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Section Title - only show when searching or filtering by specific category */}
            {(searchQuery || activeFilter !== 'catAll') && (
              <h2 className="section-title">
                {searchQuery
                  ? filteredProjects.length > 0
                    ? `${t("projectsSearchResult")} "${searchQuery}"`
                    : `${t("projectsNoResult")} "${searchQuery}"`
                  : getCategoryName(activeFilter)}
              </h2>
            )}

            {/* Projects Grid */}
            <div className="projects-grid">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.titleKey}-${index}`}
                    className="project-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <a 
                      href={project.demoUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-card-link"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.image} alt={project.translatedTitle} />
                      <div className="project-info">
                        <h3>{project.translatedTitle}</h3>
                        <p>{project.translatedDescription}</p>
                        <div className="project-cta">
                          <span className="flex items-center gap-2">
                            <span>{t("projectsMore")}</span>
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && searchQuery && (
              <motion.div
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p>{t("projectsNoMatch")}</p>
              </motion.div>
            )}
          </motion.main>
        </div>

        {/* Reach Us Section */}
        <motion.section
          className="reach-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            className="reach-image" 
            src="/QR-code.jpg" 
            alt="Reach Us" 
          />
          <div className="reach-form-container">
            <h2 className="reach-title">{t("projectsReachUs")}</h2>
            <div className="reach-form-content">
              <div className="reach-form-inputs">
                <div className="reach-form-row">
                  <input className="input-field name-input" type="text" placeholder={t("projectsName")} />
                  <input className="input-field email-input" type="email" placeholder={t("projectsEmail")} />
                </div>
                <input className="input-field subject-input" type="text" placeholder={t("projectsSubject")} />
                <input className="input-field message-input" type="text" placeholder={t("projectsMessage")} />
                <p className="reach-subtitle">{t("projectsReachSubtitle")}</p>
              </div>
              <div className="qr-section">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/QR-code.jpg" alt="QR Code" />
                <p>{t("projectsScanQR")}</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
