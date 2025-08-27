import { Github, Linkedin, Mail } from "lucide-react";
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
          href="https://linkedin.com/in/username"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="mailto:sek82468246@email.com"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <Mail className="h-6 w-6" />
        </Link>
      </div>
      <p className="text-sm text-gray-500">© 2025 Song Jae Woong. All rights reserved.</p>
    </footer>
  );
}
