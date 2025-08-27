import catLogThumbnail from "@/../public/thumbnails/catlogThumbnail.png";
import pickYourPotionThumbnail from "@/../public/thumbnails/pickYourPotionThumbnail.png";
import moamoaThumbnail from "@/../public/thumbnails/moamoaThumbnail.png";

const githubAYFG = "https://github.com/AYFG";

export const projectsData = [
  {
    id: 1,
    title: "고양이 건강관리 앱",
    description:
      "반려묘의 다음 건강검진은 언제 가야하는지, 심장사상충 약은 언제 투여해야하는지 등 건강관리를 위한 관리 도구가 필요하여 개발하였습니다.",
    longDescription:
      "프로젝트 1에 대한 더 상세한 설명입니다. 직면했던 과제, 구현된 솔루션, 그리고 프로젝트의 전반적인 영향 등을 포함할 수 있습니다. 성능과 확장성에 중점을 두고 구축되었습니다.",
    thumbnail: catLogThumbnail,
    techStack: [
      "React Native",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Tanstack Query",
      "Node.js",
      "MongoDB",
    ],
    githubUrl: `${githubAYFG}/catlog`,
  },
  {
    id: 2,
    title: "전통주 판매 사이트",
    description:
      "두 번째 팀프로젝트로 여러 전통주를 판매하는 사이트를 기획하였습니다. 맛, 날씨, 취향을 고려한 세부 카테고리와 양조장 체험의 부가 기능을 넣었습니다.",
    longDescription:
      "프로젝트 2를 더 깊이 들여다보는 이 섹션에서는 아키텍처와 디자인 선택에 대해 설명합니다. 사용자 중심 기능과 사용된 애자일 개발 프로세스를 강조합니다.",
    thumbnail: pickYourPotionThumbnail,
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "Tanstack Query"],
    githubUrl: `${githubAYFG}/PickYourPotion`,
  },
  {
    id: 3,
    title: "축제 관련 SNS",
    description:
      "축제와 체험을 사람들끼리 공유하고 찾아볼 수 있도록 기획한 어플입니다. 일반 회원은 경험 공유를, 기업 회원은 축제,체험의 등록, 홍보를 할 수 있도록 따로 구현하였습니다.",
    longDescription:
      '축제 관련 SNS 프로젝트의 시연 영상입니다. <a href="https://www.youtube.com/watch?v=0r-J16cTubE" target="_blank" rel="noopener">여기</a>',
    thumbnail: moamoaThumbnail,
    techStack: ["React", "JavaScript", "Recoil", "Styled-Component"],
    githubUrl: `${githubAYFG}/final-18-moamoa`,
  },
];

export default projectsData;
