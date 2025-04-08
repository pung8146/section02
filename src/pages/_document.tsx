// 기존 프로젝트의 index.html 파일을 수정하는 것과 비슷한 역할을 합니다.
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
