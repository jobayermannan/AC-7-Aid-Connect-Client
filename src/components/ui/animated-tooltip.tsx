import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tooltipRef] = useAutoAnimate();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    setMousePos({
      x: event.nativeEvent.offsetX - halfWidth,
      y: event.nativeEvent.offsetY,
    });
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <div
              ref={tooltipRef}
              className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 max-w-[200px] transition-all duration-300 ease-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
              style={{
                transform: `translateX(${mousePos.x}px) translateY(${mousePos.y}px)`,
              }}
            >
              <div className="font-bold text-white text-base text-center break-words">
                {item.name}
              </div>
              <div className="text-white text-xs text-center break-words">{item.designation}</div>
            </div>
          )}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 border-white relative transition duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23ccc"><rect width="400" height="300"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999">No image</text></svg>';
            }}
          />
        </div>
      ))}
    </>
  );
};
