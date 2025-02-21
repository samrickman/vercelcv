import SectionFooterLinks from "./SectionFooterLinks";
import Text from "./Text"

export default function Misc() {

  const goltcLinks = [
    { href: "https://goltc.org/videos/analysing-accuracy-balancing-bias-can-chatgpt-be-trusted-to-ease-the-care-documentation-burden-goltc-webinar-recording-23-may-2024/", label: "Watch the webinar" },
    { href: "https://github.com/samrickman/goltc-webinar-chatgpt-accuracy-bias", label: "View on GitHub" },
    { href: "https://goltc.org/videos/?fwp_ppl_groups=data-science", label: "All GOLTC webinars" },
  ];
  
  const imbalancedClassifierLinks = [
    { href: "https://github.com/samrickman/imbalanced-classifier-comparison", label: "View on GitHub" },
  ];
  
  const plottingPoetryLinks = [
    { href: "https://www.youtube.com/watch?v=bP8osv_z8b8&t=2201s", label: "Watch on YouTube" },
    { href: "https://github.com/samrickman/plotting-poetry", label: "View on GitHub" },
  ];
  
  const mapsCartogramsLinks = [
    { href: "https://mode2.ltd/r-charts/index.html", label: "Read the blog post" },
    { href: "https://github.com/samrickman/goltc-dsn-maps-cartograms-blog", label: "View on GitHub" },
  ];
  
  const krippAlphaLinks = [
    { href: "https://github.com/samrickman/krippendorf-alpha-cohen-kappa-simulation", label: "View on GitHub" },
  ];
  
  const aethelredLinks = [
    { href: "https://github.com/samrickman/aethelreds-adventure", label: "View on GitHub" },
    { href: "https://aethelreds-adventure-production.up.railway.app/", label: "Play online (not mobile-friendly)" },
  ];
  
  const tcoLinks = [
    { href: "https://stackoverflow.com/questions/78979492/optimization-of-tail-recursion-in-r/78989350#78989350", label: "Read on Stack Overflow" },
  ];		
      


  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold">Other Projects</h2>
      <Text txt="
        A collection of projects, simulations, and contributions outside my core research.
      "/>


      {/* GOLTC Webinar: AI Accuracy & Bias */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">
          Analysing Accuracy, Balancing Bias – Can ChatGPT Be Trusted to Ease the Care Documentation Burden?
        </h3>
        <Text txt="
        As lead for the <a href='https://goltc.org/interest-group/data-science/' target='_blank'>Global Observatory of Long-Term Care Data Science Interest Group</a>, I organised and chaired this webinar on the accuracy and bias of 
          large language models (LLMs) in care documentation. Care managers spend around 6 hours per week transcribing handwritten 
          notes into electronic records. LLMs are now being used to automate this process, but how reliable are these tools?
        " />
        <Text txt="
          The discussion covered key concerns, including racial disparities in speech recognition, hallucinated content in 
          automated summaries, and methods for evaluating LLM-generated case notes.
        " />

        {/* Key Topics */}
        <ul className="list-disc list-inside mt-2">
          <li className="text-gray-200">Disparities in automated speech recognition (Allison Koenecke, Cornell)</li>
          <li className="text-gray-200">LLMs outperforming medical experts in clinical text summarisation (Dave Van Veen, Stanford)</li>
        </ul>

        <SectionFooterLinks links={goltcLinks} />
        
      </div>


      {/* Imbalanced Classifier Comparison */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Imbalanced Classifier Comparison</h3>
        <Text txt="
          Python simulations comparing the accuracy and F1 score of various binary classification algorithms 
          under imbalanced data conditions with varying levels of noise. Covers logistic regression, random forest, 
          bagging, gradient boosting, Gaussian process, and sequential neural networks.
        "/>
        <SectionFooterLinks links={imbalancedClassifierLinks} />
      </div>

      {/* Plotting Poetry */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Plotting Poetry: Beyond a Grammar of Graphics</h3>
        <Text txt="
          Hadley Wickham’s <code>ggplot2</code> is built on Leland Wilkinson’s <em>grammar of graphics</em>, 
          but Wickham noted that while grammar tells us what makes a valid sentence, it doesn’t tell us how to write well. 
          <em className='ml-2'>Plotting Poetry</em> extends this idea to explore how to effectively communicate data visually.
        "/>
        <SectionFooterLinks links={plottingPoetryLinks} />

      </div>

      {/* Interactive Maps & Cartograms */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">
          Communicating Long-Term Care Research: Interactive Maps and Cartograms with R & JavaScript
        </h3>
        <Text txt="
          Interactive maps are a powerful way to highlight geographic variation in long-term care research. 
          However, every visualisation involves design choices that shape how the data is perceived. 
        "/>
        <Text txt="
          This blog post explores practical ways to create maps and cartograms in R and JavaScript (d3.js), 
          discussing the trade-offs between different visualisation techniques. The post includes reproducible code and 
          examples comparing visualisation methods — such as the different ways US election results can be mapped.
        "/>

        <SectionFooterLinks links={mapsCartogramsLinks} />

      </div>


      {/* Cohen's Kappa & Krippendorf's Alpha */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Simulations with Cohen’s Kappa and Krippendorff’s Alpha</h3>
        <Text txt="
          R simulations comparing confidence intervals for Cohen’s 𝜅 and Krippendorff’s 𝛼 in imbalanced data scenarios. 
          The results demonstrate that while both metrics behave similarly with balanced data, Krippendorff’s 𝛼 shows greater 
          uncertainty when data is highly imbalanced.
        "/>
        <SectionFooterLinks links={krippAlphaLinks} />

      </div>


      {/* Aethelred's Adventure */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Aethelred’s Adventure</h3>
        <Text txt="
          A tiny text-based RPG I made with my 6-year-old daughter. The story and many of the design choices — including 
          a flaming blue horse representing the King’s tax collectors — were hers. Written in Python.
        "/>
        <SectionFooterLinks links={aethelredLinks} />

      </div>


    {/* Optimisation of Tail Recursion in R */}
    <div className="mt-6">
      <h3 className="text-xl font-semibold">
        Optimisation of Tail Recursion in R
      </h3>
      <Text txt="
        A deep dive into <span className='font-semibold'>Tail Call Optimisation (TCO)</span>, introduced in R 4.4.0, 
        exploring how it works and how it differs from TCO implemented in C by gcc.
      "/>
      <Text txt="
        Unlike some other implementations, R’s TCO does not reuse the same stack frame or rewrite recursion as a loop. 
        Instead, R's TCO prevents the stack depth from increasing on each call, avoiding stack overflow errors in 
        deeply recursive functions. However, the added overhead means R's Tailcall() does not necessarily improve performance. In fact, 
        it can be slower than standard recursion.
      "/>

      <SectionFooterLinks links={tcoLinks} />


      <div className="mt-0 float-right">
        <a href="https://stackoverflow.com/users/12545041/samr" target="_blank" rel="noopener noreferrer">
          <img src="https://stackoverflow.com/users/flair/12545041.png?theme=dark" width="208" height="58" alt="profile for Sam Rickman on Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
        </a>        
      </div>
      <Text txt="
        I actively participate in the Stack Overflow community, answering questions on data science, R, Python, and programming concepts.
      " className="mt-2 "/>      
    </div>

      {/* Open Source Contributions */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Open Source Contributions</h3>
        <Text txt="
          I’ve contributed to various open-source projects that I use, including:
        "/>
        <ul className="list-disc list-inside mt-2 ">
          <li>
            <a href="https://github.com/r-lib/lobstr" className="">
              <code>lobstr</code>
            </a> – Introspection tools for R.
          </li>
          <li>
            <a href="https://github.com/quarto-dev/quarto-cli" className="">
              <code>Quarto</code>
            </a> – Open-source publishing system built on Pandoc.
          </li>
          <li>
            <a href="https://github.com/therneau/survival" className="">
              <code>survival</code>
            </a> – R package for survival analysis.
          </li>
        </ul>
      </div>
    </section>
  );
}
