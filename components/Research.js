import SectionFooterLinks from "./SectionFooterLinks";
import Text from "./Text";



export default function Research({ handleTabChange }) {
  const genderBiasLinks = [
    { href: "https://ascru.nihr.ac.uk/wp-content/uploads/2025/03/rickman-2025-evaluating-gender-bias-cpec-working-paper.pdf", label: "Read the paper" },
    { href: "https://github.com/samrickman/evaluate-llm-gender-bias-ltc", label: "View on GitHub" },
  ];

  const paperOneLinks = [
    { href: "https://doi.org/10.1371/journal.pone.0319745", label: "Read the paper" },
    { href: "https://github.com/samrickman/lonelinessmodel", label: "View on GitHub" },
  ];

  const paperTwoLinks = [
    { href: "https://doi.org/10.1093/geroni/igaf010", label: "Read the paper" },
  ];
  return (
    <section className="opaque-bg p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold">Research</h2>
      <Text txt="
      <em>Health and social care services produce large amounts of written records, but much of this information is unstructured free text.
        That creates two problems: important information is hard to extract, and frontline staff face a heavy documentation burden.
        My research looks at how AI can help with both, using LLMs to extract meaningful data from free text and developing methods to evaluate bias when these systems are used to reduce administrative work.</em>"
      />
      {/* Paper 1: Evaluating Gender Bias in LLMs */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">
          Evaluating Gender Bias in Large Language Models in Long-Term Care
        </h3>
        <Text txt="
          This study evaluates gender bias in LLM-generated summaries of long-term care records, using Meta’s Llama 3 and Google’s Gemma.
          It finds significant gender-based differences in the summaries, with some models downplaying women's health needs.
          The paper proposes a framework for the <span className='font-semibold'>quantitative evaluation of bias in generative LLMs</span>."
        />
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
        <h3 className="text-xl font-semibold">
          Understanding Patterns of Loneliness in Older Long-Term Care Users Using NLP
        </h3>
        <Text txt="
          This research uses NLP to identify loneliness in more than 1.1 million free-text case notes for older adults.
          A <span className='font-semibold'>transformer-based model with an F1 score of 0.92</span> is validated against external datasets,
          showing that social determinants of health can be extracted from administrative records."
        />
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
        <h3 className="text-xl font-semibold">
          Loneliness as a Risk Factor for Time to Care Home Entry
        </h3>
        <Text txt="
          This study examines how loneliness affects the time to care home entry for older adults receiving community care.
          Using <span className='font-semibold'>competing risk survival models</span>, it finds that loneliness increases the likelihood of entering a care home
          and may bring entry forward by an average of nine months for high-risk individuals.
          "
        />
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
