import Image from "next/image";

export default function PageHeader() {
  return (

    <header className="pt-20 p-6 text-center flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-600 mb-4 image-container">
        <Image src="/portrait6.png" alt="Sam Rickman" width={128} height={128} className="object-cover" />
      </div>
      <div>
      <h1 className="text-4xl font-bold">Sam Rickman PhD</h1>
      <p className="text-lg">Principal Data Scientist | Agentic AI | Deployment & Evaluation</p>
      </div>
    </header>
  )
}
