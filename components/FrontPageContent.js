
export default function FrontPageContent() {
    return (

        <section className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Discover my work</h2>
        <p className="mt-4 text-lg">
          I’m a data scientist and AI researcher specialising in natural language processing (NLP) and machine learning for public services.
          My work applies AI to extract insights from unstructured administrative care records, forecast population need, and evaluate bias in large language models (LLMs) to ensure their fair and responsible use.
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