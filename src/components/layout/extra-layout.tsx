import type { PropsWithChildren } from "react";
type Props = PropsWithChildren;

export function ExtraLayout({ children }: Props) {
  return <div style={{ border: "5px solid hotpink" }}>{children}</div>;
}
