
export default function FrontPageContent({ handleTabChange }) {
  return (

    <section className="p-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold">Discover my work</h2>
      <p className="mt-4 text-lg">
        I work on the design, delivery and evaluation of AI systems used in public services, focusing on real-world performance in high-stakes settings. This includes agent-based systems and LLMs used for automation, summarisation, and decision support. I work as a Principal Data Scientist at Made Tech and am a Research Associate at the London School of Economics.
      </p>
      <p className="mt-4">
        Find out more
        <button
          className="font-semibold hover:underline ml-2"
          onClick={() => handleTabChange("about")}
        >
          About Me
        </button>, or explore my
        <button
          className="font-semibold hover:underline ml-2"
          onClick={() => handleTabChange("research")}
        >
          Research
        </button>, and
        <button
          className="font-semibold hover:underline ml-2 mr-2"
          onClick={() => handleTabChange("cv")}
        >
          CV
        </button>
        to learn more.
      </p>
    </section>
  )
}