
export default function FrontPageContent() {
    return (

        <section className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Discover my work</h2>
        <p className="mt-4 text-lg">
          I’m a data scientist and AI researcher specialising in natural language processing (NLP) and machine learning for public services.
          My work focuses on using AI to extract insights from unstructured administrative care records, predicting population need, 
          and evaluating bias in large language models (LLMs) to promote fair and responsible use of AI.
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