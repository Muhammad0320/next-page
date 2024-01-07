import Link from "next/link";

function Index() {
  return (
    <div>
      <h1> This is the Index route </h1>

      <ul>
        <li>
          {" "}
          <Link href="/blog">Blog</Link>{" "}
        </li>

        <li>
          <Link href="/blogs/shit/dumb"> Place of ... </Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
