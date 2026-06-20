import Section from "./Section";

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About"
      subtitle="How I came to AI risk — and why I measure it"
    >
      <div className="max-w-3xl mx-auto space-y-6 font-serif">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I came to AI risk the long way — through bioinformatics and clinical research, where a
          wrong number isn't a bug, it's a patient.
        </p>

        <p className="text-lg leading-relaxed text-muted-foreground">
          That's why I don't treat AI governance as paperwork. I treat it as measurement: what's the
          actual risk, how big is it, and how do we bring it down — with rigor a board and an auditor
          can both trust.
        </p>

        <p className="text-lg leading-relaxed text-muted-foreground">
          Today I help regulated organizations quantify and de-risk the AI they depend on. I'm an
          ISO 42001 Lead Auditor, an O'Reilly instructor, a published researcher, and the founder of
          SANJEEVANI AI.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
