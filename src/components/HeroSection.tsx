import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RatingBadge from "./RatingBadge";
import CircularBadge from "./CircularBadge";

const HeroSection = () => {
  const services = [
    "WEB DEVELOPMENT",
    "BRANDING",
    "UX UI",
    "3D MODELING",
    "ILLUSTRATION",
    "STRATEGY",
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-12 flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight opacity-0 animate-fade-in-up">
              Global design agency
              <br />
              that creates{" "}
              <span className="text-muted-foreground">holistic,</span>
              <br />
              <span className="text-muted-foreground">well-balanced</span> design
              <br />
              solutions for{" "}
              <span className="italic font-normal">inspiring</span>
              <br />
              brands
            </h1>

            {/* Rating Badge */}
            <div className="opacity-0 animate-fade-in-up animation-delay-100">
              <RatingBadge />
            </div>

            {/* Services */}
            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                {services.map((service, index) => (
                  <span key={service}>
                    {service}
                    {index < services.length - 1 && (
                      <span className="mx-3">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <Button variant="cta-primary" className="group">
                Our Capabilities Deck
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Content - Circular Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end opacity-0 animate-fade-in-up animation-delay-400">
            <CircularBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
