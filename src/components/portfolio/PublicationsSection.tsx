import Section from "./Section";
import ContentCard from "./ContentCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Quote, ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Molecular insights into oxaliplatin-induced peripheral neuropathy in colorectal cancer: Unraveling a potential signature",
      journal: "American Society of Clinical Oncology (ASCO)",
      date: "2024",
      type: "Conference Abstract",
      description: "Research on oxaliplatin-induced peripheral neuropathy in colorectal cancer patients, identifying potential molecular signatures.",
      link: "https://meetings.asco.org/abstracts-presentations/237523"
    }
  ];

  const additionalLinks = [
    {
      title: "ORCID Profile",
      description: "Complete list of publications and research contributions",
      link: "https://orcid.org/0009-0009-0579-7470"
    }
  ];

  return (
    <Section 
      id="publications" 
      title="Publications" 
      subtitle="Peer-reviewed research contributing to scientific advancement"
    >
      <div className="space-y-8">
        {/* Publications */}
        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <ContentCard
              key={index}
              title={pub.title}
              subtitle={pub.journal}
              date={pub.date}
              description={pub.description}
              className="border-l-4 border-l-primary"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="font-medium">{pub.type}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Peer-Reviewed</Badge>
                  <Badge variant="secondary">Cancer Research</Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-fit"
                  onClick={() => window.open(pub.link, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View Publication
                </Button>
              </div>
            </ContentCard>
          ))}
        </div>

        {/* Additional Research Links */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-6 text-center">Research Profile</h3>
          <div className="grid gap-4">
            {additionalLinks.map((link, index) => (
              <ContentCard
                key={index}
                title={link.title}
                description={link.description}
                className="text-center"
              >
                <Button 
                  variant="default" 
                  className="w-fit mx-auto mt-4"
                  onClick={() => window.open(link.link, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Visit Profile
                </Button>
              </ContentCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PublicationsSection;