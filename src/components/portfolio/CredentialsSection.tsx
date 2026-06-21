import { Card, CardContent } from "@/components/ui/card";
import { Award, ShieldCheck, BookOpen, FileText, PenTool, GraduationCap, Users } from "lucide-react";

const tier1 = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "O-1A Visa — Extraordinary Ability",
    detail: "in AI, data science, and bioinformatics",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "ISO/IEC 42001 Lead Auditor",
    detail: "certified to audit AI management systems to the international standard",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'O\'Reilly Live Training — "Quantifying AI Risk"',
    detail: "101 practitioners, NPS 67 (world-class), zero detractors, acquisitions asked for more",
    quote:
      "Absolutely top flight content and lecture. The question I asked on ROI vs VaR and the accompanying answer really hit hard. ROI is often the measure executives focus on but the internal dissonance on the counter metric is just as important. Suneeta is an excellent instructor and I will be attending her future sessions.",
    attribution: 'attendee, O\'Reilly Live Training "Quantifying AI Risk," June 2026',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "First Author, Journal of Clinical Oncology",
    detail: "peer-reviewed clinical research (ASCO 2024)",
  },
  // TODO: ISO/IEC 27701:2025 Lead Auditor — in progress; add to Tier 1 when certified.
];

const tier2 = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Author — The AI-Human Synergy (2024)",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title:
      "Master's in Bioinformatics · 25 years across regulated industries (healthcare, finance, insurance, life sciences)",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Peer reviewer — Frontiers in Oncology, Frontiers in Immunology, PLOS ONE",
  },
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-20 px-6 section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Why me
          </p>
          <h2 className="text-gradient-animated mb-4">You've hired people to build your AI, audit it, and train your team. None of them are measuring whether it's actually safe. That's the gap I exist in.</h2>
        </div>

        {/* Tier 1 — gold accent border */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {tier1.map((cred, index) => (
            <Card
              key={index}
              className="shadow-card transition-smooth border-2 border-accent hover:shadow-elegant hover:-translate-y-1"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="text-primary shrink-0 mt-1">{cred.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{cred.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cred.detail}</p>
                  {cred.quote && (
                    <blockquote className="mt-4 border-l-2 border-accent pl-4 text-base italic text-foreground leading-relaxed">
                      "{cred.quote}"
                      <footer className="mt-2 not-italic text-sm text-muted-foreground">
                        — {cred.attribution}
                      </footer>
                    </blockquote>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tier 2 */}
        <div className="grid md:grid-cols-3 gap-6">
          {tier2.map((cred, index) => (
            <Card
              key={index}
              className="shadow-card transition-smooth border-0 hover:shadow-elegant"
            >
              <CardContent className="flex items-start gap-3 p-6">
                <div className="text-primary shrink-0 mt-0.5">{cred.icon}</div>
                <p className="text-base text-foreground leading-relaxed">{cred.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
