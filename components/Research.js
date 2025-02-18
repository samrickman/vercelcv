import SectionFooterLinks from "./SectionFooterLinks";



export default function Research({handleTabChange}) {
  const genderBiasLinks = [
    { href: "https://doi.org/10.21203/rs.3.rs-5166499/v2", label: "Read the paper" },
    { href: "https://github.com/samrickman/evaluate-llm-gender-bias-ltc", label: "GitHub repository" },
  ];
  
  const paperOneLinks = [
    { href: "https://doi.org/10.1371/journal.pone.0319745", label: "Read the paper" },
    { href: "https://github.com/samrickman/lonelinessmodel", label: "GitHub repository" },
  ];
  
  const paperTwoLinks = [
    { href: "https://doi.org/10.1093/geroni/igaf010", label: "Read the paper" },
  ];
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold">Research</h2>
      <p className="mt-3"><em>Health and social care services generate vast amounts of written records. Yet most of this information is unstructured free text.
        This creates two major challenges: vital information is difficult to extract, and frontline staff face an
        overwhelming documentation burden. My research explores AI to address both problems,
        using LLMs to extract meaningful data from free text, and developing methods to evaluate bias in LLMs used to reduce administrative workload.</em></p>
      {/* Paper 1: Evaluating Gender Bias in LLMs */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">
          Evaluating Gender Bias in Large Language Models in Long-Term Care
        </h3>
        <p className="text-gray-300 mt-2">
          This study evaluates gender bias in LLM-generated summaries of long-term care records using Meta’s Llama 3 and Google’s Gemma.  
          Findings reveal significant gender-based differences in summaries, with women's health needs downplayed in certain models.  
          The paper proposes a framework for <span className="font-semibold">quantitative evaluation of bias in generative LLMs</span>.
        </p>
        <div className="mt-2">
          
      <div className="flex flex-wrap gap-4 items-center mt-2">
        <SectionFooterLinks links={genderBiasLinks} />
        <button 
          className="presentation-button mr-2 mt-2" 
          onClick={() => handleTabChange("genderbiaspresentation")}
        >
          Presentation
        </button> 
      </div>

          

        </div>
      </div>

      {/* Paper 2: NLP & Loneliness in Long-Term Care Users */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">
          Understanding Patterns of Loneliness in Older Long-Term Care Users Using NLP
        </h3>
        <p className="text-gray-300 mt-2">
          This research applies NLP to over 1.1 million free-text case notes to identify loneliness in older adults.  
          Using a <span className="font-semibold">transformer-based model with an F1 score of 0.92</span>, it validates loneliness indicators against external datasets,  
          demonstrating the feasibility of extracting social determinants of health from administrative records.
          <br></br>
          <sub className="mt-2"><em>This paper was accepted in February 2025 and is currently in production.</em></sub>
        </p>
        <div className="mt-2">
        <div className="flex flex-wrap gap-4 items-center mt-2">
        <SectionFooterLinks links={paperOneLinks} />
        <button 
          className="presentation-button mr-2 mt-2" 
          onClick={() => handleTabChange("lonelinesspresentation")}
        >
          Presentation
        </button> 
        </div>

        </div>
      </div>

      {/* Paper 3: Loneliness & Risk of Care Home Entry */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">
          Loneliness as a Risk Factor for Time to Care Home Entry
        </h3>
        <p className="text-gray-300 mt-2">
          This study examines how loneliness affects the time until care home entry for older adults receiving community care.  
          Using <span className="font-semibold">competing risk survival models</span> it finds that loneliness increases the likelihood of entering a care home  
          and may accelerate the process by an average of 9 months for high-risk individuals.
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-2">
        <SectionFooterLinks links={paperTwoLinks} />
        <button 
          className="presentation-button mr-2 mt-2" 
          onClick={() => handleTabChange("lonelinesspresentation")}
        >
          Presentation
        </button> 
        </div>
      </div>
    </section>
  );
}
