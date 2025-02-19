import RevealPresentationFrame from "./RevealPresentationFrame";

export default function Presentation() {
  return (
    <RevealPresentationFrame 
    title = "LLM loneliness Presentation"
    txt = "This presentation extracts risk of loneliness from care notes using NLP and uses it in a regression model as a predictor of risk of care home entry"
    src = "/loneliness-presentation.html"
    />
  );

}
