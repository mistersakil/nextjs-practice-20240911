import React from "react";

export default function ParallelLayout({ children, left, right }) {
  let isSidebar = false;
  return (
    <>
      {children}
      {/* {left}
      {right} */}
      {isSidebar ? left : right}
    </>
  );
}
