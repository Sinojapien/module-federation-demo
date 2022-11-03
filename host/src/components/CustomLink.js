import React from "react";
import Link from "next/link";

const CustomLink = ({ children }) => (
  <Link href="/404" passHref>
    <div>{children}</div>
  </Link>
);

export default CustomLink;
