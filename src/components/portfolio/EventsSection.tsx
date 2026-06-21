import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, ExternalLink, Quote } from "lucide-react";

const OREILLY_URL = "https://learning.oreilly.com/live-events/-/0642572345235/";

const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Events
          </p>
          <h2 className="text-gradient-animated mb-4">Speaking &amp; Training</h2>
        </div>

        {/* Chronological, newest first */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Event 1 — O'Reilly (June 2026) */}
          <a
            href={OREILLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="h-full shadow-card transition-smooth border-0 hover:shadow-elegant hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="text-primary">
                    <Mic className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="ml-auto">June 2026</Badge>
                </div>
                <CardTitle className="text-xl mt-3 flex items-start gap-2">
                  <span className="group-hover:underline">
                    O'Reilly Live Training — "Quantifying AI Risk"
                  </span>
                  <ExternalLink className="w-4 h-4 mt-1 shrink-0 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I delivered O'Reilly's live training on quantifying AI risk to 101 practitioners.
                </p>
                <p className="text-base text-foreground font-medium">
                  101 practitioners · NPS 67 (world-class range) · zero detractors · O'Reilly
                  acquisitions requested more
                </p>
              </CardContent>
            </Card>
          </a>

          {/* Event 2 — WashU Olin (April 3, 2026) */}
          <Card className="h-full shadow-card transition-smooth border-0">
            <CardHeader>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="text-primary">
                  <Mic className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className="ml-auto">April 3, 2026</Badge>
              </div>
              <CardTitle className="text-xl mt-3">
                AI Literacy Session — WashU Olin Business School
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I led an AI literacy session for students in the Olin Business School CEL program — a
                well-received session.
              </p>
              {/* Verbatim institutional relationship text, approved by WashU Olin CEL Executive
                  Director Leslie Heusted. Do not paraphrase, trim, or add endorsement phrasing. */}
              <p className="text-base leading-relaxed text-foreground italic border-l-2 border-accent pl-4">
                "SANJEEVANI AI has participated as a business client through Olin's Business School's
                Center for Experiential Learning Startup Practicum at Washington University in St.
                Louis. And has been supported by the WashU School of Law Entrepreneurship and IP
                Clinic."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Single testimonial block (verbatim — carousel returns in v2) */}
        <Card className="shadow-elegant border-2 border-accent max-w-3xl mx-auto">
          <CardContent className="p-8">
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            <blockquote className="text-lg leading-relaxed text-foreground">
              "Absolutely top flight content and lecture. The question I asked on ROI vs VaR and the
              accompanying answer really hit hard. ROI is often the measure executives focus on but
              the internal dissonance on the counter metric is just as important. Suneeta is an
              excellent instructor and I will be attending her future sessions."
            </blockquote>
            <footer className="mt-4 text-sm text-muted-foreground">
              — attendee, O'Reilly Live Training "Quantifying AI Risk," June 2026
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;
