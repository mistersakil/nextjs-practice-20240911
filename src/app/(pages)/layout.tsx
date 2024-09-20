import React from "react";
import Link from "next/link";
export default ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">home</Link> &nbsp;
        <Link href="/posts">posts</Link> &nbsp;
        <Link href="/about">about</Link> &nbsp;
        <Link href="/admin">admin dashboard</Link>
      </nav>
      <hr />
      {children}
    </>
  );
};
