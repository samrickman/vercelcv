import Head from 'next/head';

export default function RevealPresentationFrame({title, txt, src, className = "p-6 max-w-4xl mx-auto content-center ml-40"}) {
    return (
        <section className={className}>
          <Head>
            <title>{title}</title>
          </Head>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2">
            {txt}. View it below or 
            <a href={src} target="_blank" className="ml-2">open in a new tab</a>.
          </p>
    
        
          {/* Embedded Reveal.js Presentation */}
          <div className="content-center ml-0 mt-4 border border-gray-600 rounded-lg overflow-hidden flex justify-start w-[70vw]">
      <iframe
        src={src}
        className="w-[90vw] h-[85vh] border-0 ml-0 z-10"
        title={title}
      ></iframe>
    </div>
    
    
        </section>
      );
  }
  
 