// CSS 모듈 사용
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
