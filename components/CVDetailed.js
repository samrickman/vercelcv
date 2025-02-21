import Text from "./Text";
import Section from "./Section";
import List from "./List";

export default function CVDetailed({ handleTabChange }) {
    return (
        <section className="p-6 max-w-4xl mx-auto">

            {/* Technical Skills */}
            <div className="mt-6">
                <Section title="Technical Skills">
                    <h4 className="text-lg font-semibold mt-4">Python</h4>
                    <Text txt="Experienced in Python for data science, NLP, and machine learning. Skilled in:" />
                    <List
                        items={[
                            {
                                text: "Machine Learning & NLP: PyTorch, TensorFlow, Scikit-learn",
                                subitems: [
                                    "Experienced with neural network architectures for different tasks: CNNs for image classification, SNNs for text classification, and transformers for text generation. Adapt models based on task complexity, interpretability needs, and dataset constraints.",
                                    "Developed a practical framework for evaluating bias in generative and discriminative LLMs used with an administrative dataset of 115 million words, applying quantitative metrics to assess linguistic patterns and disparities in AI-generated outputs.",
                                    "Evaluated bias in state-of-the-art LLMs (Llama 3, Gemma, DeepSeek, BART, T5) to assess fairness and robustness, finding a statistically significant association between gender and the use of disability-related terms in the Gemma model.",
                                    "Fine-tuned and optimised transformer models for domain-specific tasks, including training RoBERTa to identify loneliness in social care case notes, achieving an accuray of 0.97 and F1 of 0.92",
                                    "Used LLMs to generate high-fidelity synthetic datasets, enabling reproducibility and benchmarking for models trained on sensitive data that cannot be publicly shared, ensuring rigorous evaluation while preserving data confidentiality.",
                                ],
                            },
                            {
                                text: "Data Processing: Pandas, NumPy, Cython",
                                subitems: [
                                    "Writing high-performance, optimised code for large-scale data processing, using vectorised operations and just-in-time compilation for efficiency.",
                                ],
                            },
                            {
                                text: "Automation & Scripting: FastAPI, asyncio, multiprocessing",
                                subitems: [
                                    "Develop scalable REST APIs with FastAPI and Flask, integrating machine learning models into production-ready services.",
                                    "Built interactive web interfaces using Streamlit to showcase and visualise model outputs, making research results more accessible to stakeholders.",
                                ],
                            },
                        ]}
                    />


                    <h4 className="text-lg font-semibold mt-4">R</h4>
                    <Text txt="Strong background in R for statistical computing, data visualisation, and performance optimisation." />
                    <List
                        items={[
                            {
                                text: "Data Manipulation: data.table, tidyverse",
                                subitems: [
                                    "Writing clear, reusable, and maintainable code, balancing efficiency with readability.",
                                    "Using data.table and dplyr for scalable data processing, optimising queries for large datasets.",
                                ],
                            },
                            {
                                text: "Modelling: Regression (lme4, survival, cmprsk), Classification (caret), Networks (igraph)",
                                subitems: [
                                    "Experienced in a wide range of statistical models, including Bayesian inference (rstan), multistate models (msm), and illness-death models (idm).",
                                    "Strong foundation in base R enabling quick learning and application of new R packages, selecting the most appropriate models for each research question.",
                                    "Developer of internal R package to standardise consumption of public-facing, rate-limited API requests within the team."
                                ],
                            },
                            {
                                text: "Geospatial Analysis: sf, terra, osrm, leaflet, tmap",
                                subitems: [
                                    "Working with spatial data for research and policy analysis, mapping trends in health and social care.",
                                    "Useing geospatial tools, including cartogram for Dorling cartograms, hexjsonwidget for interactive hex maps, and echarts4r for custom visualisations.",
                                ],
                            },
                            {
                                text: "Communicating Results: ggplot2, plotly, Shiny, Quarto",
                                subitems: [
                                    "Creating clear and engaging data visualisations using ggplot2, plotly, and highcharter.",
                                    "Develop interactive dashboards and applications with Shiny, making complex findings accessible.",
                                    "Have written blog posts and delivered presentations on effective data communication.",
                                ],
                            },
                            {
                                text: "Performance & Extensions: Rcpp (C++), rextendr (Rust interface)",
                                subitems: [
                                    "Profiling and optimising R code for efficiency, rewriting performance-critical components in C++ (Rcpp) or Rust (rextendr) where needed.",
                                ],
                            },
                        ]}
                    />

                </Section>

                <Section title="Other Tools & Platforms">
                    <Text txt="I try to use <span class='font-semibold'>the right tool for the job</span> and have experience with:" />
                    <List
                        items={[
                            {
                                text: "Lower-level Programming: Rust, C, C#",
                                subitems: [
                                    "Used when writing performance-critical code, executables, or accessing .NET libraries.",
                                ],
                            },
                            {
                                text: "Frontend & UI: reveal.js, React, Next.js, Tailwind CSS",
                                subitems: ["Used reveal.js for presentations, Next.js and Tailwind for this website."],
                            },
                            {
                                text: "Backend & APIs: Node.js, Flask, FastAPI",
                                subitems: ["Built endpoints for machine learning models I have trained."],
                            },
                            {
                                text: "Systems & Scripting: Docker, Bash, PowerShell, SQL, VBA",
                                subitems: [
                                    "Ensure all research is reproducible with Docker containers on GitHub.",
                                    "Use NVIDIA Container Toolkit for GPU dependencies in Docker builds.",
                                ],
                            },
                            {
                                text: "Automated Reports: Quarto, rmarkdown, LaTeX, Pandoc",
                                subitems: [
                                    "Produced reports for government using Quarto/LaTeX/Pandoc.",
                                    "Contributed bug fixes to the Quarto GitHub repository.",
                                ],
                            },
                            {
                                text: "Cloud Computing: AWS (EC2, Lambda), DigitalOcean, Vercel",
                                subitems: [
                                    "Used AWS EC2 for LLM training and inference with GPUs.",
                                    "Lambda for serverless API requests, Vercel for hosting this site.",
                                ],
                            },
                        ]}
                    />
                </Section>
            </div>
            <Section title="Employment">
                <h4 className="text-xl font-semibold mt-2">Researcher in Data Science and the Care System</h4>
                <Text txt="Care Policy and Evaluation Centre (CPEC), LSE | 2020 – Present" />
                <List
                    items={[
                        {
                            text: "Designed and led a study evaluating gender bias in Large Language Models (LLMs) used in social care in a dataset of 115m words of case notes.",
                            subitems: [
                                "Used LLMs to generate gender-swapped versions of real administrative case notes.",
                                "Evaluated gender bias by comparing summarisations of male and female texts from Meta's Llama 3 and Google’s Gemma, benchmarking against summaries generated by 2019 models from the same companies (BART and T5).",
                                "Quantified bias using sentiment analysis, linguistic comparisons, and mixed-effects regression models of counts of topics and words generated by each model.",
                                "Found statistically significant effect of gender on sentiment in the Gemma model, with magnitude greater than benchmark models.",
                                "Found statistically significant association of gender with needs-related words in Gemma model e.g. disabled, unable, require, receive, complex.",
                                "Outlined policy implications of women's health needs being downplayed in a system where cases are prioritised and care allocated based on apparent need.",
                                "Found no significant effects of gender on the output of Llama 3 model.",
                                "This disparity between state-of-the-art LLMs demonstrates the importance of evaluating bias in AI used in public services.",
                                "Developed a practical framework for bias evaluation, based on counterfactual fairness, that can be used in generative and discriminative LLMs in health and care.",
                            ],
                        },
                        {
                            text: "Created a pipeline to extract structured data from free-text social care records.",
                            subitems: [
                                "Developed transformer-based NLP models to identify loneliness from 23 million words across 1.1 million free-text case notes.",
                                "Achieved an F1 score of 0.92 against human annotations, outperforming traditional NLP methods.",
                                "Validated outputs against survey data, confirming expected associations with dementia, disability, and living alone.",
                                "Provided a structured loneliness indicator that was a statistically significant predictor of social care service use.",
                                "Findings used to inform social care service planning, enabling policymakers to quantify and respond to social isolation risks.",
                            ],
                        },
                        {
                            text: "Led multi-disciplinary AI projects in public services, applying ML to forecast population need and system capacity.",
                            subitems: [
                                "Developed predictive models for care demand using structured and unstructured data from over 3,000 individuals.",
                                "Applied competing risks survival models to estimate impact of loneliness on time to care home entry, demonstrating a median reduction of nine months in time to admission.",
                                "Implemented geospatial analysis on care home supply, mapping 8,900+ care homes across England and analysing regional disparities in availability by developing a new supply metric derived by mapping distances from every UK postcode to every care home.",
                            ],
                        },
                        {
                            text: "Developed and maintained a large-scale automated reporting system to support Greater London’s Covid-19 social care response.",
                            subitems: [
                                "Designed and implemented a data pipeline with over 20,000 lines of code to process daily data from 1,300+ care homes and 1,100+ home care providers.",
                                "Built predictive models to assess Covid-19 risks, including infection rates, mortality, workforce shortages, and financial sustainability across different boroughs and care settings.",
                                "Automated the generation of daily reports, delivering real-time insights to social care professionals, local government, and policymakers.",
                                "Guided the distribution of critical resources, including PPE, emergency staffing, and Covid-19 testing kits, ensuring targeted support for at-risk providers.",
                                "Conducted financial impact analyses that informed the allocation of £600 million in government infection control grants to stabilise the care sector.",
                                "Developed forecasting models for post-hospital discharge care demand, helping London councils commission additional social care capacity to ease NHS bed pressures.",
                                "Findings were used in daily briefings for Directors of Adult Social Services and Public Health, shaping emergency response and policy decisions.",
                            ],
                        },

                        {
                            text: "Managed and mentored research assistants, ensuring technical accuracy and rigour in analysis.",
                            subitems: [
                                "Supervised and trained junior researchers in machine learning, NLP, and statistical modelling, guiding them through data cleaning, feature engineering, model validation, and ethical AI considerations.",
                                "Led development of robust data validation pipelines across multiple projects, ensuring data integrity and reproducibility in research outputs.",
                                "Oversaw quality assurance on a large-scale data pipeline that ingested data daily from multiple sources (APIs, spreadsheets, and web scraping), written in Python, R, and Stata, ensuring stability despite evolving data formats.",
                                "Developed automated workflows using Quarto and LaTeX to produce multi-output final research reports in html and MS Word format, ensuring consistency and accuracy in outputs shared with policymakers.",
                                "Coordinated research dissemination with government stakeholders, leading regular meetings and delivering presentations to policymakers at NHS England, the Department of Health and Social Care (DHSC), and local authorities.",
                                "Presented research on bias in LLMs in social care to government bodies, informing discussions on AI policy and ethical AI implementation in public services.",
                            ],
                        },
                        {
                            text: `Assistant Editor at the <a href="https://journal.ilpnetwork.org/about/editorialteam" target="_blank">Journal of Long-Term Care</a>.`,
                            subitems: [
                                "Reviewed and edited research papers covering quantitative and qualitative methodologies in health and social care research.",
                                "Handled peer review processes, ensuring rigorous methodological standards were maintained across a wide range of studies.",
                                "Worked with authors to refine statistical analyses and clarify research findings for interdisciplinary readerships.",
                            ],
                        },
                        {
                            text: `Founded and led the <a href="https://goltc.org/interest-group/data-science/" target="_blank">Global Observatory of Long-Term Care Data Science Interest Group</a>.`,
                            subitems: [
                                "Organised and chaired expert-led presentations on AI applications in long-term care policy, fostering interdisciplinary collaboration.",
                                "Hosted discussions on bias in LLMs and automated speech recognition (ASR) models, highlighting risks and challenges in their adoption for care services.",
                                "Led research presentations on how Bluetooth-enabled devices worn by residents and staff can be used to generate real-time social network data, improving understanding of care interactions.",
                                "Coordinated an international discussion on predicting long-term care needs, including a case study on the Austrian cash-for-care system using administrative data.",
                            ],
                        },

                    ]}
                />
            </Section>

            <Section title="Selected Research & Reports">
                <p>For further details see the<button
                    className="font-semibold hover:underline ml-2"
                    onClick={() => handleTabChange("research")}
                >research</button> section</p>
                <List
                    items={[
                        `Rickman, S. (2024) <a href="https://doi.org/10.21203/rs.3.rs-5166499/v2" target="_blank">Evaluating Gender Bias in Large Language Models</a> (preprint).`,
                        `Rickman, S., Fernandez, J. L., & Malley, J. (2025). <a href="https://academic.oup.com/innovateage/advance-article/doi/10.1093/geroni/igaf010/8005829" target="_blank">Loneliness as a risk factor for time to care home entry for older adults receiving community care.</a> <em>Innovation in Aging</em>, igaf010.`,
                        `Rickman, S., Fernandez, J. L., & Malley, J. (2025). <a href="https://eprints.lse.ac.uk/127374/" target="_blank">Understanding patterns of loneliness in older long-term care users using natural language processing with free text case notes.</a> <em>PLOS One</em> ISSN 1932-6203 <em>(In Press)</em>.`,
                        `Rickman, S. (2024) <em>Analysing Variability in Systems for Joint Working</em> – Investigating NLP methods for understanding regional social care policies.`,
                        `Cartagena-Farias, J., Hu, B., Brimblecombe, N., & Rickman, S. (2024), <em>Fuel poverty and changes in long-term care needs and mental health among older people: Beyond energy consumption and affordability. (Currently under peer review)</em>.`,
                        `Rickman, S., Leigh-Wood, T. & Fernandez, J.L. (2023) <em>Mapping Residential and Nursing Care Home Supply</em> – Geospatial analysis of care home availability across England.`,
                        `Fernandez, J.L & Rickman S. (2023) <em>Regional Variation in Social Care Outcomes</em> – Examining disparities in social care quality and access.`,
                    ]}
                />
            </Section>

            <Section title="Awards & Recognition">
                <List
                    items={[
                        {
                            text: "🏆 2022 ILPN Josh Weiner Award – Best conference presentation: <em>Using Machine Learning to Extract Information About Loneliness in Older People</em>.",
                            subitems: [
                                "Awarded for research demonstrating how NLP can extract structured loneliness indicators from 1.1 million free-text case notes of 3,046 older adults receiving care.",
                                "Developed a bidirectional transformer model achieving an F1 score of 0.92 in detecting loneliness-related sentences, significantly outperforming traditional methods.",
                                "Validated results against survey data, showing strong alignment with known predictors such as living alone, dementia, and disability.",
                                "Findings provided a scalable method for identifying social isolation risks, with applications in social care service planning and policy decisions.",
                                "An open-source implementation of the model was made available on <a href='https://github.com/samrickman/lonelinessmodel' target='_blank'>GitHub</a>.",
                            ],
                        },
                    ]}
                />
            </Section>


            <Section title="Previous Roles">
                <h4 className="text-lg font-semibold mt-2">Operational & Social Work Management (2009 – 2019)</h4>
                <List
                    items={[
                        {
                            text: "Managed frontline and strategic social care services across multiple roles, overseeing teams, budgets, and policy implementation.",
                            subitems: [
                                "Led a team of 14 social workers and support staff, providing operational oversight, performance management, and professional development.",
                                "Developed and implemented policies on information governance, safeguarding, and risk assessment, ensuring compliance with regulatory frameworks.",
                                "Designed and deployed data-driven service planning tools to identify trends in demand, optimise resource allocation, and evaluate service effectiveness.",
                                "Managed multi-agency collaborations, working with healthcare providers, local government, and third-sector organisations to improve service coordination.",
                            ],
                        },
                        {
                            text: "Direct client work with vulnerable adults across diverse settings.",
                            subitems: [
                                "Worked with rough sleepers, adults with mental health conditions, substance misuse issues, dementia, physical disabilities, and those with a history of offending.",
                                "Conducted complex case assessments and developed intervention plans tailored to individual needs and risk factors.",
                                "Provided crisis intervention, safeguarding vulnerable adults and ensuring appropriate legal frameworks (e.g. Mental Capacity Act, Care Act) were applied.",
                            ],
                        },
                    ]}
                />
            </Section>

            <Section title="Education">
                <List
                    items={[
                        {
                            text: `<span class="font-semibold">PhD candidate (thesis submitted 2024, viva March 2025)</span> – London School of Economics.`,
                            subitems: [
                                "Thesis: <em>Understanding Adult Social Care Using Large Language Models with Administrative Records</em>.",
                                "Analysed 114 million words of social care records from 3,046 older adults to explore how LLMs can address gaps in structured data and reduce administrative burdens.",
                                "Developed an LLM-based loneliness detection model, validated against survey data, and used it to assess the impact of loneliness on care home entry using survival analysis.",
                                "Investigated gender bias in AI-generated social care documentation, providing an evaluation framework for bias in generative and discriminative models.",
                                "Findings inform both ethical AI deployment and practical applications for improving decision-making in social care services.",
                            ],
                        },
                        {
                            text: `<span class="font-semibold">MA in Social and Political Science</span>, University of Cambridge.`,
                        },
                        {
                            text: `<span class="font-semibold">MA in Social Work (Distinction)</span>, Goldsmiths College, University of London.`,
                        },
                    ]}
                />
            </Section>

        </section>
    );
}
