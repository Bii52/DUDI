import { useLang } from "@/hooks/lang-context";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description?: string;
  href: string;
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  useLang();
  return (
    
    <Link 
      href={href}
      className="block p-6 rounded-2xl bg-glass hover:shadow-xl transition group h-full"
    >
      <h3 className="font-semibold text-primary text-xl md:text-2xl mb-2 group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-pink group-hover:bg-clip-text group-hover:text-transparent">{title}</h3>
      {description && (
        <p className="text-sub-text text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      )}
    </Link>
  );
}
