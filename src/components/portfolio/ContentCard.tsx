import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
  tags?: string[];
  children?: ReactNode;
  className?: string;
  hover?: boolean;
}

const ContentCard = ({ 
  title, 
  subtitle, 
  description, 
  date, 
  tags, 
  children, 
  className,
  hover = true 
}: ContentCardProps) => {
  return (
    <Card className={cn(
      "shadow-card transition-smooth border-0",
      hover && "hover:shadow-elegant hover:-translate-y-1",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{title}</CardTitle>
            {subtitle && (
              <CardDescription className="text-base font-medium text-primary">
                {subtitle}
              </CardDescription>
            )}
          </div>
          {date && (
            <Badge variant="secondary" className="shrink-0">
              {date}
            </Badge>
          )}
        </div>
        {description && (
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      {(children || tags) && (
        <CardContent className="pt-0">
          {children}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default ContentCard;