import { pypImages } from "./projectImage";

const githubAYFG = "https://github.com/AYFG";

export const careersData = [
  {
    id: 101,
    title: "레이라 (복덕빵)",
    date: "2025.10 ~ 2026.01",
    description: "복덕빵 앱/웹의 기능 개발 및 유지보수를 담당했습니다.",
    longDescription: `개발 사원으로서 복덕빵 앱과 웹 서비스의 핵심 기능 개발, 결제 및 예약 시스템 구축, AI 기반 매물 요약, 자동 배포 파이프라인 구축, 무중단 배포 시스템 구현, 어드민 보안 강화, AWS 인프라 최적화 등을 담당했습니다.`,
    mainFeatures: [
      {
        title: "직업별 전문가 서비스 시스템 리뉴얼",
        detail: `
- 나이스페이 결제 모듈 연동
- 전문가 방문 상담 예약 시스템 개발
        `,
      },
      {
        title: "부동산 매물 AI 요약",
        detail: `
- 매물이 생성될 때 OpenAI API를 활용해 요약문 자동 생성 후 DB에 저장
- 매물 상세 페이지에서 요약 내용 표시
        `,
      },
      {
        title: "안드로이드 16KB 페이지 크기 지원 대응",
        detail: `
- [Google Play 정책](https://developer.android.com/guide/practices/page-sizes?hl=ko)에 따라 앱이 16KB 페이지 크기를 지원해야 함
- 라이브러리 버전 업그레이드 진행
- **버전 제약으로 인한 문제**
  - React Native 버전을 더 올릴 수 없는 상황 발생
- **16KB 지원 미흡 라이브러리**
  - @mj-studio/react-native-naver-map
  - @shopify/react-native-skia
- **해결 방법**
  - 각 라이브러리의 소스코드를 직접 확인 후 16KB 페이지 크기를 지원하도록 코드 수정
  - patch-package 툴을 사용해 빌드 시 자동으로 패치 적용

        `,
      },
      {
        title: "구글 플레이스토어, 애플 앱스토어 자동 배포",
        detail: `
- Fastlane으로 배포 자동화 구성
- GitHub Actions로 브랜치 병합 시 자동 배포 트리거 구현
- 특정 브랜치에 코드가 병합될 때 앱 자동 배포
        `,
      },
      {
        title: "Blue Green 무중단 배포",
        detail: `
- Nginx를 Docker 컨테이너로 운영
- 활성 / 대기 인스턴스의 트래픽 전환으로 무중단 배포 구현
        `,
      },
      {
        title: "전문가 모집 웹페이지 개발",
        detail: `
- AppsFlyer 딥링크로 동적 라우팅 구현
- 앱 미설치: 앱스토어로 이동
- 앱 설치: 앱의 전문가 페이지로 직접 이동
        `,
      },
      {
        title: "React 기반 웹 서비스 개발",
        detail: `
- 앱과 동일한 DB 연결
- 로그인, 회원가입, 매물 CRUD 구현
- 반응형 웹 디자인 적용
        `,
      },
      {
        title: "어드민 페이지 IP 미들웨어 개발",
        detail: `
- 등록된 IP로만 접속 제한
- 외부 접근 차단으로 보안 강화
        `,
      },
      {
        title: "AWS 비용 최적화",
        detail: `
- EC2 인스턴스 및 RDS 개발용 자원 스케줄링 적용
- ECS에 저장된 자동 배포 압축 파일 수를 제한하고 이전 파일 자동 제거
- 매월 약 70달러 AWS 요금 절약
        `,
      },
    ],
    thumbnail: pypImages.thumbnail,
    techStack: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Fastlane",
      "GitHub Actions",
      "Nginx",
      "Docker",
      "AWS",
      "OpenAI API",
    ],
    image: [{ imgUrl: pypImages.detail.main, subject: "서비스 메인" }],
    githubUrl: `${githubAYFG}`,
    projectUrl: "",
  },
];

export default careersData;
