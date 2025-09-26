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
        title: "구글 플레이스토어 출시",
        detail: `
- eas build를 사용해 앱을 빌드하고 구글 플레이 콘솔에 앱을 등록하여 출시했습니다.
- [플레이 스토어 링크](https://play.google.com/store/apps/details?id=com.anonymous.CatLog)
      `,
      },
      {
        title: "캘린더",
        detail: `
- react-native-calendars를 사용하여 캘린더를 구현하였고 해당 날짜에 기록이 있다면 파란 점으로 마킹이 되어있어 기록이 있는 것을 확인할 수 있습니다.
캘린더 페이지를 통해 반려묘의 일일 건강 기록을 작성할 수 있습니다.

`,
      },
      {
        title: "Local Notification을 사용한 알림 구현",
        detail: `
- 사냥 놀이 타이머의 끝, 건강검진과 심장사상충 약 하루 전, 당일 알림을 Local Notification을 사용하여 알리도록 구현했습니다.
`,
      },
      {
        title: "Rive 디자인 툴을 사용하여 캐릭터, 애니메이션 제작",
        detail: `
- Rive 디자인 툴을 사용하여 고양이 캐릭터, 눈 깜빡임, 사냥 애니메이션을 제작했습니다.
`,
      },

      {
        title: "백엔드 구축",
        detail: `
- Node.js, Express를 사용하여 RESTful API 서버를 개발했습니다.
- MongoDB의 Mongoose를 사용하여 데이터 모델링과 CRUD 기능을 구현했습니다.
- Json Web Token을 사용해 유저 인증을 적용했습니다.
`,
      },
      {
        title: "라즈베리파이를 사용하여 백엔드 서버 운영",
        detail: `
- Let's Encrypt에서 인증서를 발급받아 Nginx로 80포트로 들어온 요청을 443포트로 리다이렉트하여 https를 적용했습니다.
- SSH로 데스크탑에서 라즈베리파이로 원격 접속하여 백엔드 서버를 운영하고 있습니다.
- PM2의 클러스터 모드를 적용하여 여러 개의 프로세스를 실행하여 한 프로세스가 재시작해도 다른 프로세스가 요청을 이어받도록 구성했습니다.
`,
      },
    ],
    troubleShooting: [
      {
        title: "Local Notification이 설정한 시간대로 울리지 않는 오류 ",
        detail: `
- 타이머가 끝났을 때 알림이 제대로 울리지 않는 오류를 겪었습니다.
- setTimeout을 사용해 설정한 시간이 되었을 때 알림이 울리도록 하여도 시간에 맞춰 알림이 울리지 않았습니다.
- 해결한 방식으로는 [유저에게 받는 권한](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms?hl=ko) 중 **USE_EXACT_ALARM** 권한을 받도록 설정해야 했습니다.
- AndroidManifest.xml에 권한을 추가하는 것으로 문제를 해결했습니다.
\`\`\`  
<uses-permission android:name="android.permission.USE_EXACT_ALARM"/>
\`\`\`
- ![구글 앱스토어 경고](/catlog/troubleShooting/1.png)
- 그리고 유저에게 받아야 하는 권한이 추가되었을 때 변경사항에 적용하지 않으면 앱 업데이트 검토에서 거부되는 것을 알게 되었고 변경사항을 적용하여 무사히 업데이트를 통과했습니다.
      `,
      },
      {
        title: "API 통신 속도 저하",
        detail: `
- 가비아 DNS 레코드에 사설 IP와 공인 IP를 모두 등록하였는데 사설 IP에 우선적으로 요청이 전달되었고 사설 IP는 외부에서 접근이 불가능하므로 응답에 실패하고 그 이후 공인 IP로 요청이 넘어가 통신 속도가 저하되었습니다.
- 사설 IP 레코드를 삭제하여 통신 속도를 정상화 할 수 있었습니다.
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
    projectUrl: "https://play.google.com/store/apps/details?id=com.anonymous.CatLog",
  },
  {
    id: 2,
    title: "전통주 판매 사이트",
    date: "2024.06 ~ 2024.09",
    description:
      "두 번째 팀 프로젝트로 여러 전통주를 판매하는 쇼핑몰 사이트를 팀원들과 함께 구현했습니다. 간단한 테스트를 통한 전통주 추천과 술 빚기 등 일일 체험을 할 수 있는 양조장을 모아놓은 지도를 부가 기능으로 넣었습니다.",
    longDescription: `
두 번째 팀프로젝트로 여러 전통주를 판매하는 쇼핑몰 사이트를 팀원들과 함께 구현했습니다. 간단한 테스트를 통한 전통주 추천과 술 빚기 등 일일 체험을 할 수 있는 양조장을 모아놓은 지도를 부가 기능으로 넣었습니다.  
`,
    mainFeatures: [
      {
        title: "간편 로그인",
        detail: `- 번거로운 회원가입을 피하기 위해 SNS 로그인을 통한 정보수집으로 홈페이지 이용이 가능하도록 구현했고 디스코드, 네이버, 구글 로그인을 구현했습니다. `,
      },
      {
        title: "상품 구매",
        detail: `- PortOne SDK를 사용하여 카카오페이, 토스페이 등 결제를 연동했습니다.`,
      },
      {
        title: "상품 검색",
        detail: `- 과한 API 호출을 방지하기 위해 useDebounce 훅을 적용시켜  상품이 검색되도록 구현했습니다.`,
      },
      {
        title: "후기",
        detail: `- 구매한 상품에만 후기 작성이 가능하도록 구현했습니다. 작성한 후기는 Tanstack Query의 invalidateQueries가 적용되어 작성한 후기를 바로 확인할 수 있도록 구현했습니다.`,
      },
    ],
    troubleShooting: [
      {
        title: "초기 로딩 속도가 느린 문제",
        detail: `
- API 호출을 순차적으로 요청하여 초기 콘텐츠 다운로드 속도가 느렸습니다.
이 문제를 개선하기 위해 Promise.all을 사용해 병렬 요청으로 변경하여 성능을 향상시켰습니다.
- 병렬요청 중 일부 API가 실패할 가능성을 대비하여 Promise.allSettled를 사용했습니다.
#### 개선 전
![로딩개선전](/pyp/troubleShooting/1.png)
![로딩개선전 Lighthouse](/pyp/troubleShooting/2.png)
#### 개선 후
![로딩개선후](/pyp/troubleShooting/3.png)
![로딩개선후 Lighthouse](/pyp/troubleShooting/4.png)
- 이 성능 개선으로 초기 콘텐츠 다운로드를 기존 2.45초에서 69.92ms로 97%로 성능을 향상시켰고 Lighthouse 성능 점수를 92점에서 97점으로 향상시켰습니다.
- [개선한 코드 보기](https://github.com/AYFG/PickYourPotion/commit/e69d43601f8c7728f55844d15eef3afee0f272df)
`,
      },
      {
        title: "네이버 로그아웃 후 다시 로그인 했을 때 자동으로 로그인 되는 문제",
        detail: `
  - 네이버 로그인의 경우 토큰 삭제 요청을 따로 보내 로그아웃 처리를 해야합니다. 현재 로그인 상태가 Naver일 때 로그아웃 요청을 따로 구현하였고, 서버 사이드에서 요청을 보내 CORS 오류를 피했습니다.
  - [개선한 코드 보기](https://github.com/AYFG/PickYourPotion/commit/f3f479b7d8493eadfb0cddbf721063be4cd11365)
  `,
      },
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
    projectUrl: "https://pickyourpotion.shop",
  },
  {
    id: 3,
    title: "축제 관련 SNS",
    date: "2023.10 ~ 2024.02",
    description:
      "축제와 체험을 사람들끼리 공유하고 찾아볼 수 있도록 기획한 어플입니다. 일반 회원은 경험 공유를, 기업 회원은 축제,체험의 등록, 홍보를 할 수 있도록 따로 구현하였습니다.",
    longDescription: `
**서버 종료**  
축제와 체험을 사람들끼리 공유하고 찾아볼 수 있도록 기획한 어플입니다. 일반 회원은 경험 공유를, 기업 회원은 축제,체험의 등록, 홍보를 할 수 있도록 따로 구현하였습니다.`,
    mainFeatures: [
      {
        title: "스플래시 페이지 CSS 애니메이션",
        detail: `
![스플래시 페이지 CSS 애니메이션](/moamoa/feature/splashAnimation.gif)
- 스플래시 페이지의 폭죽 애니메이션과 로그인 창이 들어오는 애니메이션을 구현했습니다.
`,
      },
      {
        title: "축제 체험 리스트",
        detail: `
![스플래시 페이지 CSS 애니메이션](/moamoa/feature/infiniteScroll.gif)
- 이미지의 로딩되는 동안에 스켈레톤 UI 애니메이션을 적용하였습니다.
- IntersectionObserver를 사용하여 사용자의 스크롤이 바닥에 닿으면 다음 이미지를 불러오는 무한 스크롤을 구현했습니다. 
`,
      },
      {
        title: "유저 검색 페이지",
        detail: `
![유저 검색 페이지](/moamoa/feature/search.gif)
- 검색 페이지에 debounce를 적용하여 과도한 API 요청이 되는 것을 막았고, 검색되는 시간동안 스켈레톤 UI 애니메이션을 적용하여 검색될 화면을 유저가 예측할 수 있도록 하였습니다.
`,
      },
      {
        title: "반응형 웹 디자인",
        detail: `
![반응형 웹 디자인](/moamoa/feature/responsive.gif)
- 다양한 기기에 UI를 대응할 수 있도록 반응형 디자인을 적용하였습니다.
- CSS Flex/Grid와 미디어 쿼리를 사용하여 화면 크기에 따라 UI가 자연스럽게 변하도록 구현하였습니다.
`,
      },
    ],
    troubleShooting: [
      {
        title: "Lighthouse 성능 점수 개선",
        detail: `
- #### 무한스크롤 적용 전  
![무한스크롤 적용 전](/moamoa/troubleShooting/infiniteBefore.png)  
- #### 무한스크롤 적용 후
![무한스크롤 적용 후](/moamoa/troubleShooting/infiniteAfter.png)
- IntersectionObserver를 사용하여 사용자의 스크롤이 바닥에 닿으면 다음 이미지를 불러오는 무한 스크롤을 구현하였고 Lighthouse 성능 점수를 12점 향상시켰습니다.
        `,
      },
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
