import Link from "next/link";
import React from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">home</Link> &nbsp;
          <Link href="/posts">posts</Link> &nbsp;
          <Link href="/about">about</Link> &nbsp;
          <Link href="/dashboard">dashboard</Link>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
