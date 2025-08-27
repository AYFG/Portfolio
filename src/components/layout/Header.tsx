import Link from "next/link";

export default function Header() {
  return (
    <header
      className="border-b border-gray-200 py-4 bg-white sticky top-0 z-50"
      aria-label="메인 네비게이션"
    >
      <div className="container mx-auto px-6 max-w-4xl flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 no-underline"
          aria-label="홈페이지"
        >
          <div className="flex flex-col font-[Yeongwol]">
            <span className="">SongJaeWoong</span>
            <span className="text-center">Portfolio</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            프로젝트
          </a>
          {/* <a
            href="#blog"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            블로그
          </a> */}
          <a
            href="/resume.pdf"
            className="bg-[#00ab6c] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-85 transition-opacity"
            download
          >
            이력서 다운로드
          </a>
        </nav>
      </div>
    </header>
  );
}
