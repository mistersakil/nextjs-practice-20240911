import { NextResponse } from "next/server";

export let GET = (req, context) => {
  console.log(context.params);
  const params = context.params;
  return NextResponse.json(
    {
      code: 200,
      success: true,
      data: params,
    },
    { status: 200 }
  );
};
