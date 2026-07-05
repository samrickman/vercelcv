import List from "./List";
import Section from "./Section";
import Text from "./Text";

export default function CVDefault() {


  return (

    <section className="p-6 max-w-4xl mx-auto">

      {/* Technical Skills */}
      <div className="mt-6">
        <Section title="Technical Skills">
          <h4 className="text-lg font-semibold mt-4">Python</h4>
          <Text txt="Experienced in Python for data science, NLP and machine learning. Skilled in:" />
          <List
            items={[
              "Machine Learning & NLP: PyTorch, TensorFlow, Scikit-learn",
              "NLP: Hugging Face Transformers, Spacy, LangChain",
              "Data Processing: Pandas, NumPy, Cython",
              "Automation & Scripting: FastAPI, asyncio, multiprocessing",
            ]}
          />

          <h4 className="text-lg font-semibold mt-4">R</h4>
          <Text txt="Strong background in R for statistical computing, data visualisation and performance optimisation:" />
          <List
            items={[
              "Data Manipulation: data.table, tidyverse",
              "Modelling: regression (lme4, survival, cmprsk), classification (caret), networks (igraph)",
              "Geospatial analysis: sf, terra, osrm, leaflet, tmap",
              "Communicating results: ggplot2, plotly, Shiny, Quarto",
              "Performance & Extensions: Rcpp (C++), rextendr (Rust interface)",
            ]}
          />
        </Section>

        <Section title="Other Tools & Languages">
          <Text txt="I try to use <span class='font-semibold'>the right tool for the job</span> and have experience with:" />
          <List
            items={[
              "Lower-level Programming: Rust, C, C#",
              "Frontend & UI: reveal.js, React, Next.js, Tailwind CSS",
              "Backend & APIs: Node.js, FastAPI",
              "Systems & Scripting: Docker, Bash, PowerShell, SQL, VBA",
              "Automated reports: Quarto, rmarkdown, LaTeX, Pandoc",
              "Cloud Computing: AWS (EC2, Lambda), DigitalOcean, Vercel",
            ]}
          />
        </Section>

      </div>

      <Section title="Employment">
        <h4 className="text-xl font-semibold mt-2">Principal Data Scientist</h4>
        <Text txt=" Made Tech | 2025 – Present" />
        <List
            items={[
                "Senior technical role working on AI systems for public-sector clients.",
            ]}
        />
        <h4 className="text-xl font-semibold mt-2">Researcher in Data Science and the Care System</h4>
        <Text txt="Care Policy and Evaluation Centre (CPEC), LSE | 2019 – 2025" />
        <List
          items={[
            "Designed and led a study evaluating gender bias in Large Language Models (LLMs) used in social care, developing methods to quantify bias.",
            "Created a pipeline to extract structured data from free-text social care records, enabling data-driven service planning.",
            {
              text: "Led multi-disciplinary data science projects on AI in public services, securing research funding and applying machine learning to forecast population need and care system capacity:",
              subitems: [
                "Developed models for predicting care demand and resource allocation.",
                "Implemented geospatial analysis to evaluate service availability.",
                "Automated data cleaning, summarisation, and reporting, managing a 20,000-line codebase during the Covid-19 pandemic.",
              ],
            },
            {
              text: "Managed and mentored research assistants, ensuring technical accuracy and rigour in analysis.",
              subitems: [
                "Oversaw model validation processes to ensure data integrity.",
                "Coordinated research outputs with government stakeholders.",
              ],
            },
            `Assistant Editor at the <a href="https://journal.ilpnetwork.org/about/editorialteam" target="_blank">Journal of Long-Term Care</a>.`,
            `Founded and led the <a href="https://goltc.org/interest-group/data-science/" target="_blank">Global Observatory of Long-Term Care Data Science Interest Group</a>, bringing together researchers to discuss AI applications in care policy.`,
          ]}
        />
      </Section>


      {/* Selected Research & Reports */}
      <Section title="Selected Research & Reports">
        <List
          items={[
            `Rickman, S. (2025) <a href="https://ascru.nihr.ac.uk/wp-content/uploads/2025/03/rickman-2025-evaluating-gender-bias-cpec-working-paper.pdf" target="_blank">Evaluating Gender Bias in Large Language Models</a>`,
            `Rickman, S., Fernandez, J. L., & Malley, J. (2025). <a href="https://academic.oup.com/innovateage/advance-article/doi/10.1093/geroni/igaf010/8005829" target="_blank">Loneliness as a risk factor for time to care home entry for older adults receiving community care.</a> <em>Innovation in Aging</em>, igaf010.`,
            `Rickman, S., Fernandez, J. L., & Malley, J. (2025). <a href="https://doi.org/10.1371/journal.pone.0319745" target="_blank">Understanding patterns of loneliness in older long-term care users using natural language processing with free text case notes.</a> <em>PLOS One</em>.`,
            `Rickman, S. (2024) <em>Analysing Variability in Systems for Joint Working</em> – Investigating NLP methods for understanding regional social care policies.`,
            `Cartagena-Farias, J., Hu, B., Brimblecombe, N., & Rickman, S. (2024), <em>Fuel poverty and changes in long-term care needs and mental health among older people: Beyond energy consumption and affordability. (Currently under peer-review)</em>`,
            `Rickman, S., Leigh-Wood, T. & Fernandez, J.L Mapping Residential and Nursing Care Home Supply (2023) – Geospatial analysis of care home availability across England.`,
            `Fernandez, J.L & Rickman S. (2023) <em>Regional Variation in social care outcomes</em> – Examining disparities in social care quality and access.`,
          ]}
        />
      </Section>

      {/* Awards & Recognition */}
      <Section title="Awards & Recognition">
        <Text txt="🏆 <span class='font-semibold'>2022 ILPN Josh Weiner Award</span> – Best conference presentation: <em>Using Machine Learning to Extract Information About Loneliness in Older People</em>." />
      </Section>

      <Section title="Previous Roles">
        <h4 className="text-lg font-semibold mt-2">
          Operational Manager, Senior Social Worker, Social Worker, Support Worker, Outreach Worker (2009 – 2019)
        </h4>
        <Text txt="Managed a team of 14 staff, overseeing budgets, policy implementation, and service audits. Led data-driven service planning and inter-agency collaboration. Worked directly with rough sleepers, adults with mental health issues, drug and alcohol problems, dementia, physical disabilities, and histories of offending." />
      </Section>

      {/* Education */}
      <Section title="Education">
        <List
          items={[
            `<span class="font-semibold">PhD (awarded March 2025)</span> – Understanding Adult Social Care Using Large Language Models with Administrative Records, London School of Economics.`,
            `<span class="font-semibold">MA in Social and Political Science</span>, University of Cambridge.`,
            `<span class="font-semibold">MA in Social Work (Distinction)</span>, Goldsmiths College, University of London.`,
          ]}
        />
      </Section>



    </section>
  );
}
