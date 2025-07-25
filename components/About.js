import Text from "./Text";
import { TabContext } from "@/components/NavbarWrapper";
import { useContext } from "react";

export default function About() {
  const { activeTab, handleTabChange } = useContext(TabContext);
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <Text txt="
        I’m an AI researcher working on the development and evaluation of large language models (LLMs) in high-stakes, real-world domains. Based at the Care Policy and Evaluation Centre (CPEC) at the London School of Economics, my research focuses on how LLMs perform in applied settings — from summarising complex documents to predicting risk — and how we can ensure their safe, fair, and effective use.
      "/>
      <Text txt="
        I use Python and R to build and evaluate models for text generation, summarisation, and classification. My recent work has focused on large-scale administrative datasets and transformer-based models, using statistical tests and developing methods to quantify accuracy and fairness.
      "/>
      <Text txt="
      My background in frontline public services — including a decade as a social worker and team manager — gives me a practical lens on AI deployment. I focus on the real-world questions that come up when models are deployed in complex settings — like how risk is defined, how decisions are made based on model outputs, and how organisations shape what AI is used for. I design evaluations that go beyond technical accuracy to consider the actual impact of AI on people and systems.
      "/>
      <Text txt="
        I studied Social and Political Science at Cambridge, where I developed a strong understanding of how institutions shape society, policy, and decision-making. That foundation continues to inform my work on how AI systems are introduced, governed, and evaluated in public settings.
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
