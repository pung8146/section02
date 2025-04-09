import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  console.log("router", router);
  return (
    <div>
      <h1>Search {q}</h1>
    </div>
  );
}
