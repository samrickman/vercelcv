import { FaGithub, FaEnvelope, FaOrcid } from "react-icons/fa";

export default function ContactFooter() {
    return (

        <footer className="p-6 text-center">
            <div className="flex justify-center space-x-4 text-gray-400">
              <a href="https://github.com/samrickman/vercelcv/" target="blank_" className="text-2xl"><FaGithub /></a>
              <a href="mailto:contact@samrickman.com"
                    >
                      <FaEnvelope className="mr-2 text-2xl" />
                    </a>
              <a href="https://orcid.org/0000-0003-1921-5258" target="blank_" className="text-2xl"><FaOrcid /></a>
            </div>
            <p className="text-sm text-gray-500 mt-2">© 2025 Sam Rickman</p>
          </footer>
)
}