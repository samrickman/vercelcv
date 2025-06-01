import Text from "./Text";
import { TabContext } from "@/components/NavbarWrapper";
import { useContext } from "react";

export default function About() {
  const { activeTab, handleTabChange } = useContext(TabContext);
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
        Before moving into data science, I spent a decade in public services as a social worker and team manager. This hands-on experience with frontline data collection and decision-making shapes my approach to AI: technical development should be driven real-world needs, and even the most advanced models are useless if applied without a clear understanding of the data.
      "/>
      <Text txt="
        My Social and Political Science degree at Cambridge gave me a strong grounding in how institutions shape society, which informs my work developing and evaluating AI in public services.
      "/>

      <h2 className="text-2xl font-semibold mt-4">Upcoming events</h2>
      <Text txt="
        - September 18th - 19th 2025. LSE <a href='https://www.lse.ac.uk/International-Inequalities/10th-Anniversary/Conference' target='_blank'>International Inequalities Institute Conference</a> (London). <em>Fairness in LLMs in the public sector.</em>
      "/>
      <p className="mt-4">
        To see past presentations visit my
        <button
          className="font-semibold hover:underline ml-2 mr-2"
          onClick={() => handleTabChange("research")}
        >
          research
        </button>
        page or for GOLTC Data Science events and webinars see my

        <button
          className="font-semibold hover:underline ml-2 mr-2"
          onClick={() => handleTabChange("misc")}
        >
          other
        </button>
        projects.
      </p>
    </section>
  );
}
