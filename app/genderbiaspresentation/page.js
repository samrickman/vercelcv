import Head from 'next/head';

export default function Presentation() {
  return (
    <section className="p-6 max-w-4xl mx-auto content-center ml-40">
      <Head>
        <title>AI Bias Presentation</title>
      </Head>
      <h2 className="text-2xl font-semibold text-[#E6EDF3]">AI Bias Presentation</h2>
      <p className="text-gray-300 mt-2">
        This presentation explores bias in AI models. View it below or 
        <a href="/gender-bias-presentation.html" target="_blank" className="text-blue-400 hover:underline ml-2">open in a new tab</a>.
      </p>
      
      {/* Embedded Reveal.js Presentation */}
      <div className="content-center ml-0 mt-4 border border-gray-600 rounded-lg overflow-hidden flex justify-start w-[70vw]">
  <iframe
    src="/gender-bias-presentation.html"
    className="w-[90vw] h-[85vh] border-0 ml-0"
    title="AI Bias Presentation"
  ></iframe>
</div>


    </section>
  );
}
