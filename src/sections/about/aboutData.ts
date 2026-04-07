type TranslationKey =
  | "headerNav1"
  | "headerNav2"
  | "headerNav3"
  | "headerNav4"
  | "headerNav5"
  | "headerContact"
  | "homeTitle"
  | "homeDesc"
  | "homeButton"
  | "aboutTitle"
  | "aboutDesc"
  | "aboutCardTitle1"
  | "aboutCardTitle2"
  | "aboutCardTitle3"
  | "aboutCardDesc1"
  | "aboutCardDesc2"
  | "aboutCardDesc3"
  | "servicesTitle"
  | "servicesDesc";

export const aboutCards: { title: TranslationKey; description: TranslationKey }[]= [
  {
    title: "aboutCardTitle1",
    description: "aboutCardDesc1",
  },
  {
    title: "aboutCardTitle2",
    description:
      "aboutCardDesc2",
  },
  {
    title: "aboutCardTitle3",
    description:
      "aboutCardDesc2",
  }, 
];
