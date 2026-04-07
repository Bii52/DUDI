"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useLang } from "@/hooks/lang-context";
import { useState } from "react";

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageType("success");
        setMessage(
          data.message || "✅ Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm."
        );
        // Reset form
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        setMessageType("error");
        setMessage(data.error || "❌ Gửi thất bại, vui lòng thử lại.");
      }
    } catch (error) {
      setMessageType("error");
      setMessage("❌ Lỗi kết nối. Vui lòng thử lại.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="text-gray-800 py-20 px-4 md:px-10 overflow-hidden "
    >
      <motion.div
        className="max-w-4xl mx-auto bg-glass rounded-2xl shadow-lg p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Heading */}
        <motion.div
          className="md:text-5xl text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue to-red text-transparent bg-clip-text pb-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {t("contactTitle")}
        </motion.div>

        {/* Info + QR */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Left Column: Address, Contact, Working hours */}
          <div className="space-y-6">
            {/* Address */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80 },
                },
              }}
            >
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <MapPin /> {t("contactAddressTitle")}
              </div>
              <p className="mt-2 text-primary">
                {t("contactAddress1")}
                <br />
                {t("contactAddress2")}
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80 },
                },
              }}
            >
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Mail /> {t("infoTitle")}
              </div>
              <p className="mt-2 text-primary">
                (+84) 909 163 821
                <br />
                contact@dudisoftware.com
              </p>
            </motion.div>

            {/* Working hours */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 80 },
                },
              }}
            >
              <div className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Clock /> {t("hourTitle")}
              </div>
              <p className="mt-2 text-primary"> {t("hourText")}</p>
            </motion.div>
          </div>

          {/* Right Column: QR Code */}
          <motion.div
            className="flex justify-center md:justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80 } },
            }}
          >
            <div className="p-6 bg-glass rounded-2xl shadow-inner flex flex-col items-center">
              <Image
                src="/QR-code.jpg"
                alt="QR Code"
                className="object-contain rounded-lg"
                width={200}
                height={200}
              />
              <div className="text-sm font-semibold text-primary mt-2">{t("scanText")}</div>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="my-4 h-px bg-primary" />

        {/* Contact Form */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="text-primary mb-6">
            {t("formInstruct")}
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <HoverInput
                id="fullName"
                label={t("formName")}
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <HoverInput
                id="email"
                label="Email *"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <HoverInput
              id="subject"
              label={t("formSubject")}
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
            <HoverTextarea
              id="message"
              label={t("formMessage")}
              value={formData.message}
              onChange={handleChange}
              required
            />

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-center text-sm font-medium ${
                  messageType === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {message}
              </motion.div>
            )}

            <div className="flex justify-center pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 text-sm font-semibold rounded-3xl 
                    bg-gradient-to-r from-red to-blue
                    text-white shadow-md hover:shadow-lg transition
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Đang gửi..." : t("formButton")}
                </Button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HoverInput({
  id,
  label,
  value,
  onChange,
  ...props
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="grid w-full gap-3">
      <Label className="text-primary" htmlFor={id}>
        {label}
      </Label>
      <motion.div whileHover={{ scale: 1.02 }}>
        <Input
          {...props}
          id={id}
          value={value}
          onChange={onChange}
          className="bg-glass border-0 shadow-sm focus:shadow-lg transition text-primary"
        />
      </motion.div>
    </div>
  );
}

function HoverTextarea({
  id,
  label,
  value,
  onChange,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="grid w-full gap-3">
      <Label className="text-primary" htmlFor={id}>
        {label}
      </Label>
      <motion.div whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}>
        <Textarea
          {...props}
          id={id}
          value={value}
          onChange={onChange}
          className="bg-glass border-0 shadow-sm focus:shadow-lg transition text-primary"
        />
      </motion.div>
    </div>
  );
}
