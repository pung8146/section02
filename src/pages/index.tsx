// CSS 모듈 사용
import style from "./index.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={style.h1}>Welcome to Next.js!</h1>
      <p className={style.p}>This is a simple Next.js application.</p>
    </div>
  );
}
