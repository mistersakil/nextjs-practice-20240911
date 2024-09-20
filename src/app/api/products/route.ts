import { NextResponse } from "next/server";

export const GET = async (req) => {
  //   console.log(req);
  //   const { searchParams } = new Headers(req.headers);
  //   console.log(searchParams);
  // console.log(req.nextUrl.searchParams);
  const params = await req.nextUrl.searchParams;
  console.log(params);
  return NextResponse.json({
    code: 200,
    success: true,
    data: params,
  });
};

export const POST = async (req) => {
  // let jsonData = await req.json();
  let jsonData = await req.formData();
  let name = jsonData.get("name");
  let age = jsonData.get("age");
  console.log(jsonData, name);

  return NextResponse.json({
    code: 201,
    success: true,
    data: { age, name },
  });
};
