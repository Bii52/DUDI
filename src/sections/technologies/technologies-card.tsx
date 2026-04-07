interface TechnologyCardProps {
  name: string;
  Icon: React.ElementType;
}

export default function TechnologyCard({ name, Icon }: TechnologyCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-glass rounded-2xl shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300">
      <Icon size={64} stroke={1.5} className="mb-4 text-primary" />
      <p className="text-lg font-medium text-primary">{name}</p>
    </div>
  );
}
