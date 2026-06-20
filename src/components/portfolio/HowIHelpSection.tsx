import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Compass, Gauge, GraduationCap, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendar.notion.so/meet/siaai/0619";

const services = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Advisory engagements",
    body: "Ongoing guidance for leadership on AI risk and governance.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Risk assessments",
    body: "A quantified, defensible read of your AI risk posture.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Executive training",
    badge: "Phase one",
    body: "Leadership fluency in AI risk, built into every engagement.",
  },
];

const HowIHelpSection = () => {
  return (
    <section id="how-i-help" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Advisory &amp; consulting
          </p>
          <h2 className="text-gradient mb-4">I de-risk your AI — quantitatively</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I provide AI risk advisory and consulting to regulated organizations: measuring where
            your AI risk sits, advising your leadership, and building governance that's defensible.
            Not a checklist. A measurement, and a plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card transition-smooth border-0 hover:shadow-elegant hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="text-primary">{service.icon}</div>
                  <span className="text-xl">{service.title}</span>
                  {service.badge && (
                    <Badge variant="secondary" className="ml-auto">{service.badge}</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">{service.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic mb-6">
            Every engagement begins with a conversation.
          </p>
          <Button
            size="lg"
            variant="default"
            onClick={() => window.open(BOOKING_URL, "_blank")}
            className="group"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowIHelpSection;
