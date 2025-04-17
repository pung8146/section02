import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `http//localhost:12345/book`;

  if (q) {
    url += `?q=${q}`;
  }

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
