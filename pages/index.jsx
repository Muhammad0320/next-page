import Link from "next/link";

function Index() {
  const clients = [
    { name: "maximillian", id: "max" },
    { name: "Muhammad", id: "SAW" },
  ];

  return (
    <div>
      <h1> This is the Index route </h1>

      <ul>
        {clients.map((cl) => (
          <li key={cl.id}>
            <Link href={{ pathname: "/client/[id]", query: { id: cl.id } }}>
              {" "}
              {cl.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
