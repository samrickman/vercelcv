
export default function FrontPageContent({ handleTabChange }) {
  return (

    <section className="p-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold">Discover my work</h2>
      <p className="mt-4 text-lg">
        I’m an AI researcher specialising in large language models (LLMs) in real-world, high-stakes settings.  My work bridges technical evaluation and policy, ensuring that models used for generation, summarisation, and prediction are safe, robust, and aligned with public interest.
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