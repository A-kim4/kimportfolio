import Link from "next/link";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer role="contentinfo" className="w-full bg-linear-to-br from-gray-800 via-gray-900 to-black text-white ">
            <div className="max-w-7xl mx-auto py-6 px-4">
                <nav aria-label="Footer navigation" className="flex flex-wrap justify-center items-center gap-2 text-sm mb-4">
                    <Link href="#home" className="px-2 hover:text-blue-600 transition-colors">Home</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#services" className="px-2 hover:text-blue-600 transition-colors">Services</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#about" className="px-2 hover:text-blue-600 transition-colors">À propos</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#skills">Skills</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#Portfolio" className="px-2 hover:text-blue-600 transition-colors">Portfolio</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#contact" className="px-2 hover:text-blue-600 transition-colors">Contact</Link>
                </nav>

                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <small className="text-sm">© {new Date().getFullYear()} Malalaniaina Antonio Michael. Tous droits réservés.</small>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.facebook.com/kim2ra/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook — ouvre dans un nouvel onglet"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <CiFacebook size={24} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/antonio-michael-malalaniaina-675693362/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn — ouvre dans un nouvel onglet"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <CiLinkedin size={24} />
                        </a>

                        <a
                            href="https://github.com/A-kim4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub — ouvre dans un nouvel onglet"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}