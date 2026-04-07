import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  avatar: string;
}

export default function TestimonialCard({ name, title, text, avatar }: Testimonial ) {
  return (
    <div className="bg-glass rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-primary group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-pink group-hover:bg-clip-text group-hover:text-transparent">{name}</h3>
            <p className="text-sub-text text-sm">{title}</p>
          </div>
          <div className="relative w-10 h-10">
            <Image
              src={avatar}
              alt={name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <Separator className="my-2 h-px bg-primary" />
        <p className="text-sub-text text-sm leading-relaxed">
          “ {text} ”
        </p>
      </div>
    </div>
  );
}
