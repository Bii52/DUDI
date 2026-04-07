import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface ProjectPaginationProps {
  total: number;
  current: number;
  onGoTo: (index: number) => void;
}

export default function ProjectPagination({ total, current, onGoTo }: ProjectPaginationProps) {
  return (
    <div className="absolute bottom-6">
      <Pagination>
        <PaginationContent className="flex gap-2">
          {Array.from({ length: total }).map((_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                onClick={() => onGoTo(idx)}
                className={`h-3 w-3 rounded-full p-0 border-0 cursor-pointer transition ${
                  idx === current
                    ? "bg-primary scale-110"
                    : "bg-glass hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
