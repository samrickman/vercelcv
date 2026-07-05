
export default function FrontPageContent({ handleTabChange }) {
  return (

    <section className="p-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold">Discover my work</h2>
      <p className="mt-4 text-lg">
        I design, deliver and evaluate AI systems for public services, with a focus on how they work in practice when the stakes are high. My work includes LLMs and agentic systems used for automation, summarisation and decision support. I am a Principal Data Scientist at Made Tech and a Research Associate at the London School of Economics.
      </p>
      <p className="mt-4">
        I occasionally write about AI agents, evaluation and the practical trade-offs that come up when these systems meet real services.
        <button
          className="font-semibold hover:underline ml-2"
          onClick={() => handleTabChange("blog")}
        >
          Read the blog
        </button>.
      </p>
      <p className="mt-4">
        Read more
        <button
          className="font-semibold hover:underline ml-2"
          onClick={() => handleTabChange("about")}
        >
          about me
        </button>, or explore my
        <button
          className="font-semibold hover:underline ml-2"
          onClick={() => handleTabChange("research")}
        >
          research
        </button> and
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
