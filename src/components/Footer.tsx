import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-10 text-center text-white">
      <h2 className="mb-6 text-xl font-bold">📬 Contact</h2>
      <div className="flex flex-col items-center gap-3">
        <a href="mailto:sek82468246@email.com" className="flex items-center gap-3 text-lg text-white transition-colors hover:text-gray-300">
          <Mail className="h-5 w-5" />
          <span>sek82468246@email.com</span>
        </a>
        <div className="flex items-center gap-3 text-lg text-white">
          <Phone className="h-5 w-5" />
          <span>010-1234-5678</span>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <Link
          href="https://github.com/AYFG"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <Github className="h-7 w-7" />
        </Link>
        <Link
          href="https://linkedin.com/in/username"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <Linkedin className="h-7 w-7" />
        </Link>
      </div>
      <p className="mt-8 text-xs text-gray-400">© 2025 Song Jae Woong. All rights reserved.</p>
    </footer>
  );
}