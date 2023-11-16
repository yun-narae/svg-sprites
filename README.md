# 사용법

## 패키지 설치

스택(stack) 방식의 SVG 스프라이트 이미지 자동 생성 기능을 사용하려면 먼저 모든 개발 종속성 패키지를 설치해야 합니다.

```sh
pnpm i
```

## 자동 생성

스택(stack) 방식의 SVG 스프라이트 이미지를 자동 생성합니다.

```sh
pnpm svg
```

## 개발 웹 서버 실행

자동 생성된 SVG 스프라이트 이미지를 테스트할 정적 웹 서버를 구동합니다.

```sh
pnpm dev
```

## 배포를 위한 빌드

GitHub Pages 배포를 위한 빌드 명령을 실행하면 docs 폴더가 빌드됩니다.

```sh
pnpm build
```

## 빌드를 위한 설정

### GitHub Pages 이름

GitHib 페이지는 계정의 저장소 이름을 사용하므로 [package.json](./package.json) 파일에 `name` 값을 배포할 저장소 이름으로 설정합니다.

```json
{
  "name": "svg-sprites-stack",
}
```

### 입력/출력 설정

입력 및 출력 설정은 [gulpfile.js](./gulpfile.js) 파일을 열어 변경합니다.

```js
// 입력 폴더 경로 (모든 SVG 파일)
const INPUT = './example/svg/**/*.svg';

// 출력 폴더
const OUTPUT = './example/icons';

// 출력 파일 이름
const FILENAME = 'stack';

// GitHub 저장소 서브 디렉토리 이름
const BASE = packageInfo.base;

// 미리보기(preview) 생성 여부
const MAKE_PREVIEW = true;
```