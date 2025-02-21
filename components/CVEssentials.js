import Text from "./Text";
import Section from "./Section";
import List from "./List";

export default function CVEssentials() {
    return (
        <section className="p-6 max-w-4xl mx-auto">

            {/* Technical Skills */}
            <Section title="Technical Skills">
                <Text txt="Expert in data science, NLP, and machine learning. Skilled in:" />
                <List
                    items={[
                        "Python, R, JavaScript, and cloud platforms",
                        "LLMs, NLP & machine learning in public services",
                        "Data processing, modeling, and visualisation",
                        "Automation, APIs, and scalable cloud solutions",
                        "Full-stack development for research tools and dashboards",
                    ]}
                />
            </Section>

            {/* Employment */}
            <Section title="Employment">
                <h4 className="text-xl font-semibold mt-2">Researcher in AI & Data Science</h4>
                <Text txt="Care Policy and Evaluation Centre (CPEC), LSE | 2020 – Present" />
                <List
                    items={[
                        "Developed AI models to analyse free-text records and improve decision-making",
                        "Led research on AI bias, influencing ethical use of ML in public services",
                        "Built scalable data pipelines for forecasting and resource planning",
                    ]}
                />
            </Section>

            {/* Selected Research */}
            <Section title="Selected Research">
                <List
                    items={[
                        `<a href="https://doi.org/10.21203/rs.3.rs-5166499/v2" target="_blank">Evaluating gender bias in LLMs in long-term care</a>`,
                        `<a href="https://eprints.lse.ac.uk/127374/" target="_blank">Extracting loneliness information from free text administrative data using LLMs</a>`,
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
                        `<span class="font-semibold">PhD candidate (thesis submitted 2024, viva March 2025)</span> – LSE.`,
                        `<span class="font-semibold">MA Social & Political Science</span>, University of Cambridge.`,
                    ]}
                />
            </Section>

        </section>
    );
}
