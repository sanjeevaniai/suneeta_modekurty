import Section from "./Section";
import ContentCard from "./ContentCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {

  return (
    <Section
      id="newsletter"
      title="Newsletter"
      subtitle="Insights on AI governance, responsible AI, and navigating the evolving regulatory landscape"
      background="gradient"
    >
      <div className="max-w-3xl mx-auto">
        <ContentCard
          title="A.I.N.S.T.E.I.N."
          subtitle="Artificial Intelligence Norms, Standards, Trust, Ethics, Integrity & Navigation"
          description="Insights on AI governance, responsible AI, and navigating the evolving regulatory landscape including EU AI Act, NIST AI RMF, and ISO/IEC 42001."
          className="text-center"
        >
          <div className="mt-6">
            <Button
              size="lg"
              variant="default"
              onClick={() => window.open('https://ainstein.sanjeevaniai.com', '_blank')}
              className="w-full sm:w-auto"
            >
              Visit Newsletter
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ainstein.sanjeevaniai.com
            </p>
          </div>
        </ContentCard>
      </div>
    </Section>
  );
};

export default BlogSection;