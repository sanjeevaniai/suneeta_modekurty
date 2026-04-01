import Section from "./Section";
import ContentCard from "./ContentCard";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Founder & CEO / AI Consultant",
      company: "SANJEEVANI AI",
      date: "Aug 2025 - Present",
      description: "Delivering AI governance consulting and training engagements for compliance-driven industries, including healthcare and public health. Leading proposal design for executive AI training programs, focusing on governance, policy, and compliance frameworks. Delivering AI literacy training across Washington University in St. Louis, with a formal letter of engagement from the institution. Evaluated MBA students at WashU Olin Business School as part of the CELect experiential learning program. Approved O'Reilly Media live training instructor, with a nationally listed course on AI governance and trust scoring scheduled for June 2026. Building METRIS, a proprietary quantitative AI trust scoring platform producing cross-framework trust scores across EU AI Act, NIST AI RMF, and ISO 42001.",
      tags: ["AI Governance", "METRIS", "DeLARSify", "EU AI Act", "ISO 42001", "Executive Training", "Healthcare AI", "O'Reilly Media", "WashU"]
    },
    {
      title: "AI Architect",
      company: "Stealth AI Startup",
      date: "Feb 2025 - Present",
      description: "Implemented adaptive RAG pipelines using FAISS + Hugging Face embeddings, reducing hallucination rates by 30%. Fine-tuned foundation models with LoRA adapters on healthcare transcripts, achieving domain adaptation with 40% lower GPU cost. Designed multi-agent orchestration with built-in fairness guardrails, aligning with Responsible AI practices. Delivered MVP in 90 days, accelerating prototype velocity by 40% via Supabase backend + optimized LLM inference. Guided 20+ stakeholder interviews to de-risk adoption and sharpen compliance-sensitive market narrative.",
      tags: ["RAG Systems", "LLM Fine-tuning", "LoRA/QLoRA", "FAISS", "Multi-Agent", "Responsible AI", "MVP Development"]
    },
    {
      title: "Responsible AI & Data Science Consultant - Team Lead",
      company: "AIAL",
      date: "Aug 2024 - Feb 2025",
      description: "Led a 14-member global team to deliver enterprise-grade Responsible AI (RAI/XAI) frameworks. Served as Tech Lead for the AI Alignment Roadmap Builder team, defining technical strategy and re-architecting the project blueprint. Integrated research on AI ethics, LLM alignment, and governance frameworks into implementation planning. Developed Responsible AI roadmaps helping organizations translate academic principles into actionable governance strategies. Supported a strategic partnership with the Responsible AI Institute. Developed explainability and bias-detection libraries for LLM-based enterprise apps, ensuring compliance sign-off. Modeled $250K annual cost savings via governance adoption across 5 enterprise products.",
      tags: ["Responsible AI", "XAI", "Team Leadership", "AI Ethics", "LLM Alignment", "Governance"]
    },
    {
      title: "Senior AI Consultant",
      company: "First American",
      date: "Sep 2023 - Feb 2025",
      description: "Partnered with underwriting and legal teams to deploy a GPT-4 + OCR pipeline, cutting document review time by 60% and saving an estimated $5M annually. Built an LLM-powered RAG automation system for underwriting, enabling 80% automation of title operations and setting a new enterprise reference model. Delivered SHAP-enabled forecasting pipelines that improved portfolio risk accuracy by 15–20%, directly influencing multi-million-dollar underwriting and legal decisions. Standardized prompt engineering templates and validation frameworks, ensuring consistency across thousands of legal documents daily and reducing operational and regulatory risk.",
      tags: ["GPT-4", "OCR", "RAG", "SHAP", "Automation", "Underwriting", "Legal Tech", "Prompt Engineering"]
    },
    {
      title: "Senior AI, Data Science and BSA Consultant",
      company: "Centene",
      date: "Aug 2022 - Aug 2023",
      description: "Delivered a predictive analytics strategy using TruCloud claims data to identify cost drivers and reduce inefficiencies by 18%, contributing to $500M+ in validated Medicaid/Medicare compliance savings. Applied transformer-based models to Medicaid claims anomaly detection, improving audit accuracy and compliance transparency. Advised compliance executives through oversight dashboards (Power BI, SQL, AWS Redshift) that improved visibility by 48%. Optimized Medicare & Medicaid claims processing with automation pipelines (Python, SQL, Airflow), cutting manual interventions by 18%. Mentored and guided a team of 3 data scientists, standardizing feature engineering and A/B testing practices.",
      tags: ["Predictive Analytics", "Healthcare", "Compliance", "Medicaid", "Claims Processing", "Power BI", "AWS", "Team Leadership"]
    },
    {
      title: "AI Strategy Consultant",
      company: "Confidential Client (Aviation & Education Platform)",
      date: "Jun 2022 - Present",
      description: "Provided AI strategy coaching and implementation guidance to executive leadership. Evaluated opportunities for AI integration into aviation/education products, balancing innovation with compliance requirements. Delivered tailored training on responsible AI adoption, governance frameworks, and data strategy for scaling. Designed a roadmap for embedding AI responsibly into product development, strengthening regulatory alignment.",
      tags: ["AI Strategy", "Executive Coaching", "Responsible AI", "Aviation", "Education"]
    },
    {
      title: "AI Data Science Consultant",
      company: "GSMS Inc.",
      date: "Nov 2021 - Jul 2022",
      description: "Partnered with pharma stakeholders to elicit requirements and translate business needs into scalable data solutions. Built fraud detection pipelines (Python, SQL, PySpark, Airflow) that improved detection precision and reduced processing time by 10%. Designed a centralized AWS data lake integrating invoices, FOIA reports, and competitive intelligence, boosting enterprise data accessibility by 60%. Enabled $5M+ annual fraud loss reduction, tying analytics directly to compliance and retention impact.",
      tags: ["Pharma", "Fraud Detection", "PySpark", "AWS", "Data Lake", "Airflow"]
    },
    {
      title: "Research Scientist - Bioinformatics (Neuro Genomics & Data Science)",
      company: "WashU School of Medicine",
      date: "Jan 2021 - Nov 2021",
      description: "Grant-funded research role advancing neuro-genomics and Alzheimer's Disease. Accelerated NIH deliverables by cutting RNA-seq/proteomics analysis turnaround 30%, sustaining funding. Strengthened biomarker discovery pipelines via pathway enrichment analysis (GSEA, Reactome), improving validation of drug targets. Scaled workflows with HPC + Docker, processing 20% more samples within timelines.",
      tags: ["Bioinformatics", "Neuro Genomics", "Alzheimer's", "NIH", "RNA-seq", "HPC"]
    },
    {
      title: "Research Assistant and Data Analyst (Cancer Bioinformatics & Data Science)",
      company: "IUPUI",
      date: "Aug 2018 - Dec 2020",
      description: "Improved breast cancer diagnostics by 18% using CNN-based histopathology models, applying advanced data processing and feature engineering for more precise tumor classification. Developed comprehensive multi-omics pipelines using R and Bioconductor, integrating genomics and proteomics data for personalized medicine research.",
      tags: ["Cancer Research", "CNN", "Bioinformatics", "Multi-omics", "Personalized Medicine", "R"]
    }
  ];

  const strategicInitiatives = [
    {
      title: "Responsible AI Consultant",
      company: "Confidential Client (Web Development in Regulated Industries)",
      date: "Apr 2024 - Present",
      description: "Trained leadership on responsible AI adoption for healthcare and financial services clients. Introduced HIPAA Security Rule and NIST AI RMF frameworks into organizational practices. Designed governance-aligned AI/ML strategies that improved regulatory credibility for client deliverables. Supported policy development workshops and adoption of ethical AI safeguards.",
      tags: ["Responsible AI", "HIPAA", "NIST AI RMF", "Healthcare", "Financial Services"]
    },
    {
      title: "Bioinformatics & Data Science Cancer Researcher",
      company: "WashU School of Medicine",
      date: "Apr 2023 - Apr 2025",
      description: "Conducted colorectal cancer research on oxaliplatin-induced peripheral neuropathy; findings published as ASCO online publication. Applied single-cell analysis for PDAC, identifying potential therapeutic targets for pancreatic cancer treatment. Collaborated with oncologists to integrate bioinformatics and AI pipelines into translational cancer research.",
      tags: ["Cancer Research", "ASCO", "Single-cell Analysis", "PDAC", "Bioinformatics"]
    },
    {
      title: "Lead AI Data Scientist & Project Lead",
      company: "SuperDataScience",
      date: "Aug 2024 - Dec 2024",
      description: "Led a team of 5 on an AI/ML project forecasting likelihood of diabetes based on age, gender, and lifestyle factors. Taught, mentored, and guided the team through data science best practices from data selection, EDA, feature selection to deployment. Conducted live sessions on bioinformatics data science, bridging research methods with applied data science.",
      tags: ["Machine Learning", "Team Leadership", "Mentorship", "Healthcare AI", "Data Science"]
    },
    {
      title: "Freelance Instructor, AI, Data Science & Analytics",
      company: "ATLytiCS Inc.",
      date: "Aug 2022 - Aug 2024",
      description: "Served as instructor and mentor for 12 job seekers transitioning into careers in AI, data science, analytics, and business intelligence. Designed and delivered sessions on project planning, data acquisition, exploratory analysis, and business recommendation building. Provided one-on-one career guidance and technical mentorship.",
      tags: ["Education", "Mentorship", "Career Development", "AI Training", "Data Science"]
    }
  ];

  return (
    <Section 
      id="experience" 
      title="Professional Experience" 
      subtitle="Building excellence through diverse roles and responsibilities"
    >
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <ContentCard
            key={index}
            title={exp.title}
            subtitle={exp.company}
            date={exp.date}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </div>

      {/* Strategic Initiatives & Adjacent Roles */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">Strategic Initiatives & Adjacent Roles</h3>
        <p className="text-muted-foreground mb-6">Consulting, research, and mentorship across regulated industries</p>
        <div className="grid gap-6">
          {strategicInitiatives.map((exp, index) => (
            <ContentCard
              key={`strategic-${index}`}
              title={exp.title}
              subtitle={exp.company}
              date={exp.date}
              description={exp.description}
              tags={exp.tags}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button 
          size="lg" 
          variant="default"
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          <FileText className="w-4 h-4 mr-2" />
          View PDF Resume
        </Button>
      </div>
    </Section>
  );
};

export default ExperienceSection;