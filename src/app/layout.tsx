import Link from "next/link";
import React from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">home</Link> &nbsp;
          <Link href="/posts">posts</Link>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
