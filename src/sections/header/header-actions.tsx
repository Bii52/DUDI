import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-trigger";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/lang-context";

interface HeaderActionsProps {
  className?: string;
}

export default function HeaderActions({ className }: HeaderActionsProps) {
  const { lang, setLang } = useLang();
  const { t } = useLang();
  const toggleLang = () => {
    setLang(lang === "en" ? "vi" : "en");
  };
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ModeToggle />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={toggleLang}
          aria-label={lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
          className="group px-5 py-2 rounded-3xl bg-glass transition hover:bg-gradient-to-r hover:from-red hover:to-blue"
        >
          <span className="inline-block text-sm font-medium text-primary">
            {lang === "en" ? "En." : "Vi."}
          </span>
        </Button>
      </motion.div>
      {/* Contact */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link
          href="#contact"
          className="px-4 py-2 rounded-3xl bg-gradient-to-r from-red to-blue hover:opacity-90 transition inline-flex items-center justify-center text-sm font-medium text-primary"
        >
          {t("headerContact")}
        </Link>
      </motion.div>
    </div>
  );
}
