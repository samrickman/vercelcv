export default function CV() {
  return (
        <section className="p-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold">CV</h2>
    {/* Technical Skills */}
    <div className="mt-6">
      <h3 className="text-3xl font-semibold text-[#E6EDF3]">Technical Skills</h3>

      {/* Python */}
      <h4 className="text-lg font-semibold text-gray-200 mt-4">Python</h4>
      <p className="text-gray-200">
        Experienced in Python for data science, NLP, and machine learning. Skilled in:
      </p>
      <ul className="list-disc list-inside text-gray-200 mt-2">
        <li>Machine Learning NLP: PyTorch, TensorFlow, Scikit-learn</li>
        <li>NLP: Hugging Face Transformers, Spacy, LangChain</li>
        <li>Data Processing: Pandas, NumPy, Cython</li>
        <li>Automation & Scripting: FastAPI, asyncio, multiprocessing</li>
      </ul>

      {/* R */}
      <h4 className="text-lg font-semibold text-gray-200 mt-4">R</h4>
      <p className="text-gray-200">
        Strong background in R for statistical computing, data visualization, and performance optimization:
      </p>
      <ul className="list-disc list-inside text-gray-200 mt-2">
        <li>Data Manipulation: <code>data.table</code>, <code>tidyverse</code></li>
        <li>Modelling: regression (lme4, survival, cmprsk), classification (caret), networks (igraph)</li>
        <li>Geospatial analysis: <code>sf</code>, <code>terra</code>, <code>osrm</code>, <code>leaflet</code>, tmap</li>
        <li>Communicating results: <code>ggplot2</code>, <code>plotly</code>, <code>Shiny</code>, <code>Quarto</code></li>
        <li>Performance & Extensions: <code>Rcpp</code> (C++), <code>rextendr</code> (Rust interface)</li>
      </ul>

      {/* Other Tools & Languages */}
      <h4 className="text-lg font-semibold text-gray-200 mt-4">Other Tools & Languages</h4>
      <p className="text-gray-200">
        I try to use <span className="font-semibold">the right tool for the job</span> and have experience with:
      </p>
      <ul className="list-disc list-inside text-gray-200 mt-2">
        <li>Lower-level Programming: Rust, C, C#</li>
        <li>Frontend & UI: reveal.js, React, Next.js, Tailwind CSS</li>
        <li>Backend & APIs: Node.js, FastAPI</li>
        <li>Systems & Scripting: Bash, PowerShell, SQL, VBA</li>
        <li>Cloud Computing: AWS (EC2, Lamba), DigitalOcean, Vercel</li>
      </ul>

    </div>

        <h1 className="mt-8 text-3xl font-semibold">
          Employment
        </h1>
      {/* Current Role */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">
          Researcher in Data Science and the Care System
        </h3>
        <p className="text-gray-400">Care Policy and Evaluation Centre (CPEC), LSE | 2020 – Present</p>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li>Evaluating bias in Large Language Models (LLMs) used in social care.</li>
          <li>Developing and training LLMs to extract structured data from free-text records.</li>
          <li>Leading data science research projects and securing research grants.</li>
          <li>Managing and mentoring a team of research assistants.</li>
          <li>Assistant Editor at the <em>Journal of Long-Term Care</em>.</li>
          <li>Lead for the Global Observatory of Long-Term Care Data Science Interest Group.</li>
        </ul>
      </div>

      {/* Key Technical Experience */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">
          Data Science & AI Research
        </h3>
        <p className="text-gray-200 mt-2">
          During the Covid-19 pandemic, I managed a codebase of ~20,000 lines, 
          leading a team in developing a data pipeline for <span className="font-semibold">automated data cleaning, summarisation, and reporting</span>.  
          This involved:
        </p>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li>Ensuring data integrity via validation checks and workflow optimisation.</li>
          <li>Managing a research team’s contributions to maintain accuracy and efficiency.</li>
          <li>Coordinating with local government stakeholders on data-driven policy insights.</li>
          <li>Implementing geospatial analysis and NLP techniques for care system analysis.</li>
        </ul>
      </div>

      {/* Selected Research & Reports */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">Selected Research & Reports</h3>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li>
            <span className="font-semibold">Evaluating Gender Bias in Large Language Models</span> (2024) – 
            <a href="https://doi.org/10.21203/rs.3.rs-5166499/v2" className="text-blue-400 hover:underline ml-1">Read more</a>
          </li>
          <li>
            <span className="font-semibold">Analysing Variability in Systems for Joint Working</span> (2024) – 
            Investigating NLP methods for understanding regional social care policies.
          </li>
          <li>
            <span className="font-semibold">Mapping Residential and Nursing Care Home Supply</span> (2023) – 
            Geospatial analysis of care home availability across England.
          </li>
          <li>
            <span className="font-semibold">Regional Variation in Social Care Outcomes</span> (2023) – 
            Examining disparities in social care quality and access.
          </li>
        </ul>
      </div>

      {/* Awards & Recognition */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">Awards & Recognition</h3>
        <p className="text-gray-200 mt-2">
          🏆 <span className="font-semibold">2022 ILPN Josh Weiner Award</span> –  
          Best conference presentation: <em>Using Machine Learning to Extract Information About Loneliness in Older People</em>.
        </p>
      </div>

      {/* Past Roles */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#E6EDF3]">Previous Roles</h3>

        <h4 className="text-lg font-semibold text-gray-200 mt-2">
          Occasional Research Officer | CPEC, LSE (2019 – 2020)
        </h4>

        <h4 className="text-lg font-semibold text-gray-200 mt-4">
          Operational Manager & Senior Social Worker | Local Authority Social Care (2014 – 2019)
        </h4>
        <p className="text-gray-200 mt-2">
          Led a team of 14 staff, overseeing budget management, policy implementation, and care service audits.  
          Worked on performance management, data-driven service planning, and inter-agency collaboration
        </p>

        <h4 className="text-lg font-semibold text-gray-200 mt-4">
          Deputy Manager | Registered Social Landlord (2009 – 2012)
        </h4>
        <p className="text-gray-200 mt-2">
          Developed successful bids for social service contracts,  
          securing funding for long-term support initiatives.
        </p>
      </div>

      {/* Qualifications */}
      <div className="mt-6">
        <h3 className="text-3xl font-semibold text-[#E6EDF3]">Qualifications</h3>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li><span className="font-semibold">PhD (2025)</span> – Understanding Adult Social Care Using Large Language Models with Administrative Records, London School of Economics.</li>
          <li><span className="font-semibold">MA in Social and Political Science</span>, University of Cambridge.</li>
          <li><span className="font-semibold">MA in Social Work (Distinction)</span>, Goldsmiths College, University of London.</li>
        </ul>
      </div>


    </section>
  );
}
