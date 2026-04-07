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
  | "servicesDesc"
  | "servicesCardTitle1"
  | "servicesCardTitle2"
  | "servicesCardTitle3"
  | "servicesCardTitle4"
  | "servicesCardTitle5"
  | "servicesCardTitle6"
  | "servicesCardDesc1"
  | "servicesCardDesc2"
  | "servicesCardDesc3"
  | "servicesCardDesc4"
  | "servicesCardDesc5"
  | "servicesCardDesc6";

export const services: { title: TranslationKey; description: TranslationKey; href: string }[] = [
  {
    title: "servicesCardTitle1",
    description: "servicesCardDesc1",
    href: "#mobile",
  },
  {
    title: "servicesCardTitle2",
    description: "servicesCardDesc2",
    href: "#web",
  },
  {
    title: "servicesCardTitle3",
    description: "servicesCardDesc3",
    href: "#design",
  },
  {
    title: "servicesCardTitle4",
    description: "servicesCardDesc4",
    href: "#cloud",
  },
  {
    title: "servicesCardTitle5",
    description: "servicesCardDesc5",
    href: "#ai",
  },
  {
    title: "servicesCardTitle6",
    description: "servicesCardDesc6",
    href: "#iot",
  },
];