export default function Research() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold">Research</h2>

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
          <a href="https://doi.org/10.21203/rs.3.rs-5166499/v2" className=" mr-4">Read the paper</a>
          <a href="https://github.com/samrickman/evaluate-llm-gender-bias-ltc" className="mr-4">GitHub repository</a>
          <a href="/presentation" className="">Presentation</a>

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
        </p>
        <div className="mt-2">
          <a href="https://doi.org/10.1371/journal.pone.0319745" className=" mr-4">Read the paper</a>
          <a href="https://github.com/samrickman/lonelinessmodel" className="">GitHub repository</a>
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
        <div className="mt-2">
          <a href="https://doi.org/10.1093/geroni/igaf010" className="">Read the paper</a>
        </div>
      </div>
    </section>
  );
}
