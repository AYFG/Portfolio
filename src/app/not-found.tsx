
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 h-full">
      <div className="space-y-4">
        <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-base text-gray-600">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Button asChild>
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}
