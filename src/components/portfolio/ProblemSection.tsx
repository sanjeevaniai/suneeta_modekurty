import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const questions = [
  "Your board asked if your AI is compliant. Could you answer with a number — or a binder?",
  "You have AI in production. Do you know which systems carry the most risk — and by how much?",
  "An auditor asks for evidence your AI is safe. How long does that take your team to assemble?",
  "You're accountable for AI you didn't build and can't fully see. Where does that leave you when something fails?",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-6 section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            For leaders accountable for AI
          </p>
          <h2 className="text-gradient-animated mb-4">
            Everyone's "de-risking AI." Can anyone tell you your actual risk — measured?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((question, index) => (
            <Card
              key={index}
              className="shadow-card transition-smooth border-0 hover:shadow-elegant hover:-translate-y-1"
            >
              <CardContent className="flex items-start gap-4 p-8">
                <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-foreground">{question}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why now — urgency */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Why now
          </p>
          <p className="text-xl leading-relaxed text-foreground">
            AI is moving faster than governance. Most organizations can list their AI systems — few
            can quantify the risk those systems create. Regulators, auditors, and boards are
            increasingly asking for evidence, not intentions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
