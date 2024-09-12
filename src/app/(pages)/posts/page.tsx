import Link from "next/link";
import React from "react";

export default () => {
  let postList = [
    { id: 1, title: "title one" },
    { id: 2, title: "title two" },
    { id: 3, title: "title three" },
    { id: 4, title: "title four" },
  ];
  return (
    <>
      <h1>posts</h1>

      {postList.length &&
        postList.map((item, key) => {
          return (
            <nav key={key}>
              <Link href={"/posts/" + item.id}>{item.title}</Link>
            </nav>
          );
        })}
    </>
  );
};
