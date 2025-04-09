import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <h1>Book</h1>
      <p>This is the book page.</p>
    </div>
  );
}
