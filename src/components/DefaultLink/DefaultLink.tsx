import Link from "next/link";
import { Routes } from "@/app/routes";
import { CSSProperties, PropsWithChildren } from "react";

const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: "black",
};

interface DefaultLinkProps {
  text: string;
  path: Routes;
}

const DefaultLink = (props: PropsWithChildren<DefaultLinkProps>) => {
  const { path, text } = props;
  return (
    <Link style={linkStyle} href={path}>
      {text}
    </Link>
  );
};

export default DefaultLink;
