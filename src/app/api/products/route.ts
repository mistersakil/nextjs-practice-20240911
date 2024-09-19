import { NextResponse } from "next/server";

export async function GET(req) {
  //   console.log(req);
  //   const { searchParams } = new Headers(req.headers);
  //   console.log(searchParams);
  console.log(req.nextUrl.searchParams);
  return NextResponse.json({
    code: 200,
    success: true,
    message: "hello next",
  });
}
