import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log("router", router);
  return (
    <div>
      <h1>Book {id}</h1>
      <p>This is the book page.</p>
    </div>
  );
}
