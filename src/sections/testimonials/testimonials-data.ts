type TranslationKey =
  | "testimonialsCardName1"
  | "testimonialsCardName2"
  | "testimonialsCardName3"
  | "testimonialsCardName4"
  | "TestimonialsCardTitle1"
  | "TestimonialsCardTitle2"
  | "TestimonialsCardTitle3"
  | "TestimonialsCardTitle4"
  | "TestimonailsCardText1"
  | "TestimonailsCardText2"
  | "TestimonailsCardText3"
  | "TestimonailsCardText4";


export const testimonials : { name: TranslationKey; title: TranslationKey; text:TranslationKey; avatar: string }[]= [
  {
    name: "testimonialsCardName1",
    title: "TestimonialsCardTitle1",
    text: "TestimonailsCardText1",
    avatar: "/avatar-1.png",
  },
  {
    name: "testimonialsCardName2",
    title: "TestimonialsCardTitle2",
    text: "TestimonailsCardText2",
    avatar: "/avatar-2.png",
  },
  {
    name: "testimonialsCardName3",
    title: "TestimonialsCardTitle3",
    text: "TestimonailsCardText3",
    avatar: "/avatar-4.png",
  },
  {
    name: "testimonialsCardName4",
    title: "TestimonialsCardTitle4",
    text: "TestimonailsCardText4",
    avatar: "/avatar-3.png",
  },
];
