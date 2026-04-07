type TranslationKey =
  | "projectCardTitle1"
  | "projectCardTitle2"
  | "projectCardTitle3"
  | "projectCardDesc1"
  | "projectCardDesc2"
  | "projectCardDesc3"
  | "projectCardTitle4"
  | "projectCardDesc4"

export const projects: { name: TranslationKey; description: TranslationKey ;image: string }[] = [
  {
    name: "projectCardTitle1",
    description: "projectCardDesc1",
    image: "/project-2.png",
  },
  {
    name: "projectCardTitle2",
    description: "projectCardDesc2",
    image: "/project-1.jpg",
  },
  {
    name: "projectCardTitle3",
    description: "projectCardDesc3",
    image: "/project-3.png",
  },
  {
    name: "projectCardTitle4",
    description: "projectCardDesc4",
    image: "/project-4.jpg",
  },
];
