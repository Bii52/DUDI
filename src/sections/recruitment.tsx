import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/hooks/lang-context";

interface JobListing {
  id: number;
  title: string;
  location: string;
  description: string;
  pdf: string
}

const RecruitmentSection = () => {
  const { t } = useLang();
  const jobListings: JobListing[] = React.useMemo(
    () => [
      {
        id: 1,
        title: t("job1"),
        location: t("jobLocation1"),
        description: t("jobDesc1"),
        pdf: "https://docs.google.com/document/d/1pfI4oziTOIZwI0KwabsRSb5SAINfSkoLQJ1uXcmHdrk/edit?usp=sharing",
      },
      {
        id: 2,
        title: t("job2"),
        location: t("jobLocation2"),
        description: t("jobDesc2"),
         pdf: "https://docs.google.com/document/d/1LXxxvDAHS6a2mM7zfvH9nqS5LSnHZgS0k_keSFRMckU/edit?usp=sharing",
      },
    ],
    [t]
  );

  return (
    <section className=" antialiased py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-glass rounded-3xl p-8 md:p-12 mb-12 shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <motion.h2
              className="leading-normal text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink to-purple text-transparent bg-clip-text md:col-span-1"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {t("recruitmentTitle")}
            </motion.h2>
            <p className="text-lg sm:text-xl text-primary md:col-span-2">
              {t("recruitmentDes")}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobListings.map((job) => (
            <motion.div
              key={job.id}
              className="bg-glass rounded-3xl p-8 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Job Details */}
              <div className="flex-grow">
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.25 },
                    },
                  }}
                >
                  {/* Left Side: Title & Location */}
                  <div className="lg:col-span-1">
                    <h3 className="text-3xl font-bold text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-pink group-hover:bg-clip-text group-hover:text-transparent">
                      {job.title}
                    </h3>
                    <p className="text-sub-text">{job.location}</p>
                  </div>
                  {/* Right Side: Description */}
                  <div className="lg:col-span-2">
                    <p className="text-sub-text">{job.description}</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 pt-6 border-t border-sub-text">
                <a
                  href={job.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-primary group w-fit"
                >
                  <span className="transition group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-pink group-hover:bg-clip-text group-hover:text-transparent">
                    {t("jobButton")}
                  </span>
                  <span className="transition border border-primary rounded-full p-2 group-hover:border-0 group-hover:bg-gradient-to-r group-hover:from-pink group-hover:to-purple">
                    <ArrowRight size={20} />
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
