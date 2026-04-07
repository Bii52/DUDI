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

export const navItems: { name: TranslationKey; href: string }[] = [
  { name: "headerNav1", href: "/#home" },
  { name: "headerNav2", href: "/#about" },
  { name: "headerNav3", href: "/#services" },
  { name: "headerNav4", href: "/projects" },
  { name: "headerNav5", href: "/#testimonials" },
];