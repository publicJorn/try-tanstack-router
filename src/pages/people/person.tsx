import { useParams } from "@tanstack/react-router";

export function Person() {
  const { name } = useParams({
    from: "/people/$name",
  });

  return <h2>Say hello to {name}</h2>;
}
