import { TabContext } from "@/components/NavbarWrapper";
import { useContext } from "react";
import Text from "./Text";

export default function About() {
  const { activeTab, handleTabChange } = useContext(TabContext);
  return (
    <section className="opaque-bg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <Text txt="
        I work on the design, delivery, and evaluation of AI systems used in public services, with a focus on how they perform in real-world, high-stakes settings. I am a Principal Data Scientist at <a href='https://www.madetech.com/' target='_blank'>Made Tech</a>, where I work with teams building and deploying AI in operational environments rather than demos or research prototypes.
      "/>
      <Text txt="
        My work covers a range of AI systems, including large language models and agent-based approaches used for automation, summarisation, and decision support. I focus on understanding how these systems behave in practice – where data is messy, objectives are contested, and mistakes can have real consequences – and on designing evaluations that surface risks, limitations, and trade-offs early.
        My work often involves large administrative datasets and complex workflows, combining statistical analysis with model-based approaches to assess accuracy, robustness, and bias in ways that are meaningful for real users and organisations.
      "/>
      <Text txt="
      My background in frontline public services — including a decade as a social worker and team manager — gives me a practical lens on AI deployment. I focus on the real-world questions that come up when models are deployed in complex settings — like how risk is defined, how decisions are made based on model outputs, and how organisations shape what AI is used for. I design evaluations that go beyond technical accuracy to consider the actual impact of AI on people and systems.
      "/>
      <Text txt="
        Alongside my industry role, I am a Research Associate at the London School of Economics. I studied Social and Political Science at Cambridge, where I developed a strong understanding of how institutions shape society, policy, and decision-making. That foundation continues to inform my work on how AI systems are introduced, governed, and evaluated in public settings.
      "/>


    </section>
  );
}
