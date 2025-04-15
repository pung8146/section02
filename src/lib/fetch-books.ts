import { BookData } from "@/types";

export default async function fetchBooks(): Promise<BookData[]> {
  const url = `http//localhost:12345/book`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.log("error", error);
    return [];
  }
}
