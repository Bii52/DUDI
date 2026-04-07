export type Project = {
  id: number;
  name: string;
  category: "Web" | "Mobile" | "AI" | "Cloud";
  image: string;
};

export const projects: Project[] = [
  { id: 1, name: "hehe", category: "Web", image: "/project-1.avif" },
  { id: 2, name: "hoho", category: "Mobile", image: "/project-2.avif" },
  { id: 3, name: "Project 3", category: "AI", image: "/project-3.avif" },
  { id: 4, name: "Project 4", category: "Cloud", image: "/project-1.avif" },
  { id: 5, name: "Project 5", category: "Web", image: "/project-2.avif" },
  { id: 6, name: "Project 6", category: "Mobile", image: "/project-2.avif" },
  { id: 7, name: "kaka", category: "Mobile", image: "/project-3.avif" },
  { id: 8, name: "Project 8", category: "Mobile", image: "/project-1.avif" },
  { id: 9, name: "Project 9", category: "Mobile", image: "/project-2.avif" },
  { id: 10, name: "Project 10", category: "Mobile", image: "/project-3.avif" },
  { id: 11, name: "Project 11", category: "Mobile", image: "/project-2.avif" },
  { id: 12, name: "Project 12", category: "Mobile", image: "/project-3.avif" },
  { id: 13, name: "Project 13", category: "Mobile", image: "/project-1.avif" },

];
