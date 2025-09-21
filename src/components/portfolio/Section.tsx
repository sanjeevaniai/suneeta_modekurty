import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient";
}

const Section = ({ id, title, subtitle, children, className, background = "default" }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-20 px-6",
        background === "gradient" && "section-gradient",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;