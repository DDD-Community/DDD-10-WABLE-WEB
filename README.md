# DDD-10-WABLE-WEB

DDD 10기 WEB 2팀 와블와블 웹 프론트엔드 레포지토리

## 기술 스택

웹 기반 + PWA(구글 스토어, 앱 스토어까진 x...)

![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white) ![Emotion](https://img.shields.io/badge/👩‍🎤%20Emotion-hotpink?style=flat-square&)  
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white) ![Tanstack Query](https://img.shields.io/badge/Tanstack%20Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)

---

## 컨벤션

### 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┗ 📂common
 ┣ 📂constants
 ┣ 📂contexts
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┃ ┣ 📂mutations
 ┃ ┣ 📂pages
 ┃ ┗ 📂queries
 ┣ 📂layout
 ┣ 📂services
 ┃ ┗ 📂instances
 ┣ 📂styles
 ┣ 📂types
 ┗ 📂utils
```

### 코드 컨벤션

- React Component

```tsx
export default function Component() {
  return <div>...</div>;
}
```

- Event Handler

```tsx
export default function Component() {
  function handleClick() {
    ...
  }

  return <div onClick={handleClick}>...</div>
}
```

- ESLint
  Vite의 기본 ESLint 설정 사용

- Prettier

```json
{
  "singleQuote": true
}
```

### 커밋 컨벤션

- feat: 마크업, 디자인, 기능 개발
- fix: 버그 수정
- style: 코드 스타일 수정(ex. eslint, prettier 적용)
- docs: 문서(ex. 리드미 수정)
- refactor: 기능 상의 변경 없이 코드 리팩터링
- chore: 패키지 설치 및 삭제, eslint 혹은 prettier 변경 등 기타

### 코드 리뷰

### Pull Request, Issues 템플릿 및 카테고리
