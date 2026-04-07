"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { contacts } from "./footer-data";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { IconBrandFacebook, IconCircleLetterZ } from "@tabler/icons-react";
import { useLang } from "@/hooks/lang-context";

export default function Footer() {
  const socialLinks = [
    { icon: IconBrandFacebook, href: "https://www.facebook.com/DudiSoftware", label: "Facebook" },
    { icon: IconCircleLetterZ, href: "https://zalo.me/2871243904030074512", label: "Zalo" },
  ];
  const { t } = useLang();
  return (
    <motion.footer
      className="bg-glass text-primary rounded-2xl mx-4 my-6 p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Top section */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Logo + About */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href={"/#home"}>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DUDI Software Logo"
                width={40}
                height={40}
              />
              <span className="font-semibold text-lg text-primary">
                DUDI Software
              </span>
            </div>
          </Link>
          <p className="mt-4 text-sm mb-4 leading-relaxed">{t("footerText")}</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Link href={href} target="_blank" aria-label={label}>
                  <Icon className="size-8 hover:text-white transition" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-semibold mb-3">{t("servicesTitle")}</h3>
          <motion.ul className="space-y-2 text-sm">
            <motion.li
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="hover:text-gradient cursor-pointer"
            >
              {t("servicesCardTitle1")}
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="hover:text-gradient cursor-pointer"
            >
              {t("servicesCardTitle2")}
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="hover:text-gradient cursor-pointer"
            >
              {t("servicesCardTitle3")}
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="hover:text-gradient cursor-pointer"
            >
              {t("servicesCardTitle4")}
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="hover:text-gradient cursor-pointer"
            >
              {t("servicesCardTitle5")}
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-semibold mb-3">{t("infoTitle")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5" />
              {t("contactAddress1")}
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5" />
              {t("contactAddress2")}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4" /> {contacts.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" /> {contacts.email}
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <Separator className="my-2 h-px bg-primary" />

      {/* Bottom section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center text-sm text-sub-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p>{t("footerRight")}</p>

      </motion.div>
    </motion.footer>
  );
}
