import Section from "./Section";
import ContentCard from "./ContentCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Quote, ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "METRIS: A 17-Agent Multi-Modal Framework for Quantitative AI Governance Assessment",
      journal: "Zenodo",
      date: "2025",
      type: "Preprint",
      description: "Presents METRIS, a comprehensive platform transforming qualitative governance assessments into quantitative intelligence through a novel multi-agent architecture.",
      link: "https://zenodo.org/record/17850617",
      doi: "10.5281/zenodo.17850617",
      tags: ["AI Governance", "Multi-Agent Systems"]
    },
    {
      title: "TAK1 blockade induces DNA damage and immunogenic cGAS-STING pathway activation in pancreatic cancer",
      journal: "Molecular Cancer Therapeutics",
      date: "October 2025",
      type: "Journal Article",
      description: "Research on targeting TGF-β pathway to reverse immunologically cold tumor microenvironment in pancreatic ductal adenocarcinoma.",
      link: "https://doi.org/10.1158/1535-7163.TARG-25-B018",
      doi: "10.1158/1535-7163.TARG-25-B018",
      tags: ["Peer-Reviewed", "Cancer Research", "Pancreatic Cancer"]
    },
    {
      title: "Targeting tumor-intrinsic TAK1 triggers anti-tumor immunity and sensitizes pancreatic cancer to checkpoint blockade",
      journal: "bioRxiv",
      date: "October 2025",
      type: "Preprint",
      description: "Preprint on TAK1 inhibition inducing DNA damage and activating cGAS-STING pathway for immune checkpoint blockade effectiveness.",
      link: "https://doi.org/10.1101/2025.10.08.681226",
      doi: "10.1101/2025.10.08.681226",
      tags: ["Cancer Biology", "Immunotherapy"]
    },
    {
      title: "TAK1 blockade induces DNA damage and immunogenic cGAS-STING pathway activation in pancreatic cancer",
      journal: "Cancer Research (AACR)",
      date: "September 2025",
      type: "Conference Abstract",
      description: "Presented at AACR Special Conference in Pancreatic Cancer Research, Boston, MA.",
      link: "https://doi.org/10.1158/1538-7445.PANCREATIC25-B029",
      doi: "10.1158/1538-7445.PANCREATIC25-B029",
      tags: ["Peer-Reviewed", "Cancer Research", "AACR"]
    },
    {
      title: "The association between different molecular alterations in Wnt/β-catenin signaling and response to treatment with immune checkpoint inhibitors in solid tumors",
      journal: "Journal for ImmunoTherapy of Cancer (JITC)",
      date: "November 2024",
      type: "Journal Article",
      description: "Explored molecular alterations in Wnt/β-catenin signaling and response to immune checkpoint inhibitors across 1,661 patients with solid tumors.",
      link: "https://doi.org/10.1136/jitc-2024-sitc2024.0169",
      doi: "10.1136/jitc-2024-sitc2024.0169",
      tags: ["Peer-Reviewed", "Cancer Research", "Immunotherapy"]
    },
    {
      title: "Molecular insights into oxaliplatin-induced peripheral neuropathy in colorectal cancer: Unraveling a potential signature",
      journal: "American Society of Clinical Oncology (ASCO)",
      date: "2024",
      type: "Conference Abstract",
      description: "Research on oxaliplatin-induced peripheral neuropathy in colorectal cancer patients, identifying potential molecular signatures.",
      link: "https://meetings.asco.org/abstracts-presentations/237523",
      tags: ["Peer-Reviewed", "Cancer Research"]
    },
    {
      title: "Integrated Correlation Analysis of Proteomics and Transcriptomics Data in Alzheimer's Disease",
      journal: "IUPUI ScholarWorks (Indiana University)",
      date: "2020",
      type: "Master's Thesis",
      description: "MS Thesis exploring correlations between proteomics and transcriptomics data in Alzheimer's Disease. Performed differential expression analysis across AD, Control, and PSP samples, identifying 192 significant protein correlations and 208 significant gene correlations with p-value below 0.00000000000005.",
      link: "https://doi.org/10.7912/SJAW-8K50",
      doi: "10.7912/SJAW-8K50",
      tags: ["Bioinformatics", "Alzheimer's Disease", "Proteomics", "Transcriptomics"]
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
                  {pub.doi && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-xs">DOI: {pub.doi}</span>
                    </div>
                  )}
                </div>
                {pub.tags && pub.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                )}
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