import React from "react";
import Link from "next/link";
export default () => {
  return (
    <>
      <h1>Admin header</h1>
      <nav>
        <Link href="/">website</Link> &nbsp;
        <Link href="/admin">dashboard</Link> &nbsp;
        <Link href="/admin/users">users</Link> &nbsp;
        <Link href="/admin/posts">posts</Link> &nbsp;
      </nav>
      <hr />
    </>
  );
};
