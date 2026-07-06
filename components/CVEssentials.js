import List from "./List";
import Section from "./Section";
import Text from "./Text";

export default function CVEssentials() {
    return (
        <section className="p-6 max-w-4xl mx-auto">

            {/* Technical Skills */}
            <Section title="Technical Skills">
                <Text txt="Experienced in generative AI, agentic systems, NLP and machine learning. Skilled in:" />
                <List
                    items={[
                        "LLM agents and production-oriented AI systems in public services",
                        "AWS Bedrock, Python, R, JavaScript and cloud platforms",
                        "Evaluation frameworks, reliability testing and statistical modelling",
                        "Retrieval, routing, APIs and multi-turn decision logic",
                        "Data processing, modelling and visualisation",
                    ]}
                />
            </Section>

            {/* Employment */}
            <Section title="Employment">

                <h4 className="text-xl font-semibold mt-2">Principal Data Scientist</h4>
                <Text txt=" Made Tech | 2025 – Present" />
                <List
                    items={[
                        "Designing, evaluating and architecting production-oriented LLM agents for public-sector clients",
                        "Building AWS Bedrock-based workflows with tools, retrieval and structured decision logic",
                        "Testing reliability, determinism and operational risk in high-stakes AI systems",
                    ]}
                />

                <h4 className="text-xl font-semibold mt-6">Researcher in AI & Data Science</h4>
                <Text txt="Care Policy and Evaluation Centre (CPEC), LSE | 2019 – 2025" />
                <List
                    items={[
                        "Developed AI models to analyse free-text records and support decision making",
                        "Led research on bias and evaluation of AI systems in health and social care",
                        "Built data pipelines and analytical tools using large administrative datasets",
                    ]}
                />

            </Section>

            {/* Selected Research */}
            <Section title="Selected Research">
                <List
                    items={[
                        `<a href="https://ascru.nihr.ac.uk/wp-content/uploads/2025/03/rickman-2025-evaluating-gender-bias-cpec-working-paper.pdf" target="_blank">Evaluating gender bias in LLMs in long-term care</a>`,
                        `<a href="https://doi.org/10.1371/journal.pone.0319745" target="_blank">Extracting loneliness information from free text administrative data using LLMs</a>`,
                        `<a href="https://academic.oup.com/innovateage/advance-article/doi/10.1093/geroni/igaf010/8005829" target="_blank">Predicting care home entry from LLM-extracted loneliness</a>`,
                    ]}
                />
            </Section>

            {/* Awards & Recognition */}
            <Section title="Awards">
                <Text txt="🏆 2022 ILPN Josh Weiner Award – Best ML research presentation." />
            </Section>

            {/* Previous Roles */}
            <Section title="Previous Experience">
                <h4 className="text-lg font-semibold mt-2">Public Services & Data-Driven Management (2009 – 2019)</h4>
                <Text txt="Led teams, managed budgets, and applied data-driven approaches to service improvement." />
            </Section>

            {/* Education */}
            <Section title="Education">
                <List
                    items={[
                        `<span class="font-semibold">PhD</span> – LSE.`,
                        `<span class="font-semibold">MA Social & Political Science</span>, University of Cambridge.`,
                    ]}
                />
            </Section>

        </section>
    );
}
