import { useRouter } from "next/router";

function Project() {
  const router = useRouter();

  console.log(router.pathname);

  console.log(router.query);

  return (
    <div>
      <h1> This is the project ID page </h1>
    </div>
  );
}

export default Project;
