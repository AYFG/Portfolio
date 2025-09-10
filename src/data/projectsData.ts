import { catLogImages, pypImages, moamoaImages } from "./projectImage";

const githubAYFG = "https://github.com/AYFG";

export const projectsData = [
  {
    id: 1,
    title: "고양이 건강관리 앱",
    date: "2025.03 ~ 2025.09",
    description:
      "반려묘의 다음 건강검진은 언제 가야하는지, 심장사상충 약은 언제 투여해야하는지 등 건강관리를 위한 관리 도구가 필요하여 개발하였습니다.",
    longDescription: `반려묘의 다음 건강검진은 언제 가야하는지, 심장사상충 약은 언제 투여해야하는지 등 건강관리를 위한 관리 도구가 필요하여 개발하였습니다.`,
    mainFeatures: [
      {
        title: "프로젝트 기획 및 디자인 구성",
        detail: `
- 이것은 첫 번째 주요 기능입니다.
- 이것은 두 번째 주요 기능에 대한 설명입니다.

이 기능들은 Lazy 의 편의성을 극대화하기 위해 설계되었습니다.
`,
      },
      {
        title: "프로젝트 기획 및 디자인 구성 2",
        detail: `
- 이것은 첫 번째 주요 기능입니다.
- 이것은 두 번째 주요 기능에 대한 설명입니다.

이 기능들은 crazy 의 편의성을 극대화하기 위해 설계되었습니다.
`,
      },
    ],
    troubleShooting: [
      {
        title: "이것으로 인한 오류",
        detail: `
- 이것은 첫 번째 주요 오류입니다.
- 이것은 두 번째 주요 오류에 대한 설명입니다.

이 오류들은 crazy 의 편의성을 극대화하기 위해 설계되었습니다.
`,
      },
    ],
    thumbnail: catLogImages.thumbnail,
    techStack: [
      "개인 프로젝트",
      "React Native",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Tanstack Query",
      "Node.js",
      "MongoDB",
    ],
    image: [
      {
        imgUrl: catLogImages.detail.main,
        subject: "메인 페이지",
      },
      {
        imgUrl: catLogImages.detail.hunt,
        subject: "사냥 타이머",
      },
      {
        imgUrl: catLogImages.detail.daily,
        subject: "일일 기록",
      },
      {
        imgUrl: catLogImages.detail.dailyForm,
        subject: "일일 기록 양식",
      },
      {
        imgUrl: catLogImages.detail.mypage,
        subject: "마이 페이지",
      },
      {
        imgUrl: catLogImages.detail.medicalForm,
        subject: "건강 기록 양식",
      },
    ],
    githubUrl: `${githubAYFG}/catlog`,
  },
  {
    id: 2,
    title: "전통주 판매 사이트",
    date: "2024.06 ~ 2024.09",
    description:
      "두 번째 팀프로젝트로 여러 전통주를 판매하는 사이트를 기획하였습니다. 맛, 날씨, 취향을 고려한 세부 카테고리와 양조장 체험의 부가 기능을 넣었습니다.",
    longDescription:
      "프로젝트 2를 더 깊이 들여다보는 이 섹션에서는 아키텍처와 디자인 선택에 대해 설명합니다. 사용자 중심 기능과 사용된 애자일 개발 프로세스를 강조합니다.",
    mainFeatures: [{ title: "주요 기능", detail: "주요 기능에 대한 상세 설명입니다. (예시)" }],
    troubleShooting: [
      { title: "문제 해결", detail: "문제 해결 과정에 대한 상세 설명입니다. (예시)" },
    ],
    thumbnail: pypImages.thumbnail,
    techStack: ["팀 프로젝트", "Next.js", "TypeScript", "TailwindCSS", "Zustand", "Tanstack Query"],
    image: [
      {
        imgUrl: pypImages.detail.testStart,
        subject: "랜딩 페이지",
      },
      {
        imgUrl: pypImages.detail.testResult,
        subject: "테스트 결과 전통주 추천",
      },
      {
        imgUrl: pypImages.detail.productDetail,
        subject: "전통주 상세",
      },
      {
        imgUrl: pypImages.detail.login,
        subject: "로그인",
      },
      {
        imgUrl: pypImages.detail.discordLogin,
        subject: "디스코드 로그인",
      },
      {
        imgUrl: pypImages.detail.adultAuth,
        subject: "성인 인증",
      },
      {
        imgUrl: pypImages.detail.productPurchase,
        subject: "구매 페이지",
      },
      {
        imgUrl: pypImages.detail.chooseKakaoPay,
        subject: "카카오페이 선택",
      },
      {
        imgUrl: pypImages.detail.choicePayment,
        subject: "결제 방법 선택",
      },
      {
        imgUrl: pypImages.detail.KakaoPaymentTest,
        subject: "카카오 페이 결제",
      },
      {
        imgUrl: pypImages.detail.successKakaoPay,
        subject: "결제 진행",
      },
      {
        imgUrl: pypImages.detail.successPayment,
        subject: "결제 완료",
      },
      {
        imgUrl: pypImages.detail.order,
        subject: "주문 내역",
      },
      {
        imgUrl: pypImages.detail.main,
        subject: "메인 페이지",
      },
      {
        imgUrl: pypImages.detail.productCategory,
        subject: "전통주 카테고리",
      },
    ],
    githubUrl: `${githubAYFG}/PickYourPotion`,
  },
  {
    id: 3,
    title: "축제 관련 SNS",
    date: "2023.10 ~ 2024.02",
    description:
      "축제와 체험을 사람들끼리 공유하고 찾아볼 수 있도록 기획한 어플입니다. 일반 회원은 경험 공유를, 기업 회원은 축제,체험의 등록, 홍보를 할 수 있도록 따로 구현하였습니다.",
    longDescription: "축제 관련 SNS 프로젝트의 시연 영상입니다.",
    mainFeatures: [{ title: "주요 기능", detail: "주요 기능에 대한 상세 설명입니다. (예시)" }],
    troubleShooting: [
      { title: "문제 해결", detail: "문제 해결 과정에 대한 상세 설명입니다. (예시)" },
    ],

    thumbnail: moamoaImages.thumbnail,
    techStack: ["팀 프로젝트", "React", "JavaScript", "Recoil", "Styled-Component"],
    githubUrl: `${githubAYFG}/final-18-moamoa`,
    image: [
      {
        imgUrl: moamoaImages.detail.login,
        subject: "로그인",
      },
      {
        imgUrl: moamoaImages.detail.main,
        subject: "홈 게시글",
      },
      {
        imgUrl: moamoaImages.detail.postDetail,
        subject: "게시글 상세",
      },
      {
        imgUrl: moamoaImages.detail.mypage,
        subject: "마이페이지",
      },
      {
        imgUrl: moamoaImages.detail.festival,
        subject: "축제 & 체험 리스트",
      },
      {
        imgUrl: moamoaImages.detail.festivalDetail,
        subject: "축제 & 체험 상세",
      },
    ],
  },
];

export default projectsData;
