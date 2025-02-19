import Text from "./Text";

export default function About() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <Text txt="
        I’m a data scientist and AI researcher specialising in natural language processing (NLP) and machine learning at the Care Policy and Evaluation Centre (CPEC) at the London School of Economics. My PhD research focused on applying large language models (LLMs) to extract insights from adult social care administrative records.
      "/>
      <Text txt="
        I work primarily in Python and R for machine learning, data analysis, and NLP, with experience in JavaScript for web development and visualisation. My research involves building and evaluating AI models that process complex text data, ensuring they are both accurate and practically useful in real-world applications.
      "/>
      <Text txt="
        Before moving into data science, I spent a decade in public services as a social worker and later as a team manager. This hands-on experience with frontline data collection and decision-making shapes my approach to AI: technical development should be driven real-world needs, and even the most advanced models are useless if applied without a clear understanding of the data.
      "/>
      <Text txt="
        My Social and Political Science degree at Cambridge sharpened my focus on fairness in public services, providing a theoretical foundation that has informed my work evaluating bias in AI models.
      "/>
    </section>
  );
}
