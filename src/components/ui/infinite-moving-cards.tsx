import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.name + index}
          className="relative rounded-2xl border border-slate-700 px-8 py-6"
          style={{
            background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
          }}
        >
          <blockquote>
            <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
              {item.quote}
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </span>
            </div>
          </blockquote>
        </div>
      ))}
    </div>
  );
};
