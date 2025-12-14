import { Star } from "lucide-react";

const RatingBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-surface-elevated">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-foreground text-foreground"
          />
        ))}
      </div>
      <div className="h-4 w-px bg-border" />
      <span className="text-sm font-medium">
        Rating 5.0 <span className="text-muted-foreground">| 24 reviews</span>
      </span>
    </div>
  );
};

export default RatingBadge;
