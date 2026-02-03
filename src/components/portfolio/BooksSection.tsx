import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, ExternalLink } from "lucide-react";

const BooksSection = () => {
  const books = [
    {
      title: "The AI-Human Synergy: A Data Scientist's Vision for the Future",
      subtitle: "A comprehensive exploration of AI and human collaboration",
      publisher: "Amazon",
      year: "2024",
      pages: "Available on Kindle",
      rating: "New Release",
      reviews: "",
      status: "Published",
      description: "A visionary exploration of how artificial intelligence and human intelligence can work together to create a better future, written from a data scientist's perspective.",
      awards: [],
      link: "https://www.amazon.com/AI-Human-Synergy-Scientists-Vision-Future-ebook/dp/B0DF8XFW1N"
    }
  ];

  return (
    <Section 
      id="books" 
      title="Books & Publications" 
      subtitle="Authored works sharing knowledge and insights with the global community"
      background="gradient"
    >
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <Card key={index} className="shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-spring">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src="/ai-human-synergy-cover.png" 
                alt="The AI-Human Synergy book cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-white">{book.status}</Badge>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{book.subtitle}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Publisher:</span>
                  <span>{book.publisher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Year:</span>
                  <span>{book.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Length:</span>
                  <span>{book.pages}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{book.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {book.description}
              </p>
              
              {book.awards.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium">Awards:</p>
                  <div className="flex flex-wrap gap-1">
                    {book.awards.map((award, awardIndex) => (
                      <Badge key={awardIndex} variant="outline" className="text-xs">
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => window.open(book.link, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Amazon
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default BooksSection;