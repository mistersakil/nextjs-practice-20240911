import { NextResponse } from "next/server";

export let GET = (req, context) => {
  // console.log(req.nextUrl.searchParams);
  // console.log(context.params);
  return NextResponse.json({ msg: "hello next - dynamic params" });
};
