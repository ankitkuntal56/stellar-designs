import { Eye } from "lucide-react";

const CircularBadge = () => {
  const text = "SCROLL DOWN TO SEE WHAT'S HOT • ";
  const characters = text.split("");

  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 animate-float">
      {/* Outer rotating text */}
      <div className="absolute inset-0 animate-rotate-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text className="fill-foreground text-[11px] font-medium tracking-widest uppercase">
            <textPath href="#circlePath" startOffset="0%">
              {characters.map((char, i) => (
                <tspan key={i}>{char}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center circle with icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-foreground flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer group">
          <Eye className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default CircularBadge;
