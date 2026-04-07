import { Separator } from "@/components/ui/separator";

interface AboutCardProps {
  title: string;
  description: string;
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="bg-glass rounded-2xl md:p-6 p-4 hover:shadow-xl transition group">
      <div className="font-semibold text-primary group-hover:bg-gradient-to-r group-hover:from-blue group-hover:to-pink group-hover:bg-clip-text group-hover:text-transparent text-2xl pb-2 ">
        {title}
      </div> 
      <Separator className="my-2 h-px bg-primary" />
      <p className="text-primary text-lg leading-relaxed">{description}</p>
    </div>
  );
}