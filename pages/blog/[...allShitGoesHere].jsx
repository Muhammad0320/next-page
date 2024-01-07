import { useRouter } from "next/router";

function AllFileCpmp() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1> Anthing can go here </h1>
    </div>
  );
}

export default AllFileCpmp;
