import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-10 text-center text-white">
      <h2 className="mb-4 text-xl font-bold">📬 Contact</h2>
      <div className="mb-4 flex justify-center gap-6">
        <Link
          href="https://github.com/AYFG"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <Github className="h-6 w-6" />
        </Link>

        <Link
          href="mailto:sek82468246@gmail.com"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <Mail className="h-6 w-6" />
        </Link>
      </div>

      <div className="my-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-gray-300">
          <Phone className="h-5 w-5" />
          <p className="text-base">010-5383-4472</p>
        </div>
        <a href="mailto:sek82468246@gmail.com" className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white">
          <Mail className="h-5 w-5" />
          <p className="text-base">sek82468246@gmail.com</p>
        </a>
      </div>
      <p className="text-sm text-gray-500">© 2025 Song Jae Woong. All rights reserved.</p>
    </footer>
  );
}
