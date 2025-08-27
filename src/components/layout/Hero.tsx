import React from "react";
import heroBackground from "@/assets/hero-background.png";

export default function Hero() {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 px-6 overflow-hidden"
      style={{
        // backgroundImage: `url(${heroBackground.src})`,
        backgroundColor: "#f9fafb",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[0.5px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-brand-secondary mb-4 tracking-tight animate-fade-in">
          송재웅
        </h1>

        <div
          className="mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-gray-800 mb-2">
            Frontend Developer
          </h2>
        </div>

        <div
          className="mb-10 animate-slide-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            호기심을 행동으로 옮기는 개발자 송재웅입니다. 프론트엔드를 배우다 서버에 호기심이 생겨
            Node.js로 라즈베리 파이에 서버를 직접 구축했고, 모바일 개발에 도전하여 React Native로
            안드로이드 앱을 출시했습니다. 이 과정을 통해 기획 → 프론트엔드 구현 → 백엔드 API →
            배포까지의 과정을 경험했습니다.
            <span className="block mt-2">
              앞으로도 새로운 기술에 대한 호기심을 멈추지 않고 행동으로 옮기는 개발자가 되겠습니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
