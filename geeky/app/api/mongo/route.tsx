import dbConnection from "@/libs/dbConnection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    let dbConn = await dbConnection();
    return NextResponse.json(
      {
        code: 200,
        success: true,
        data: dbConn,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        code: 400,
        success: false,
        data: "error",
      },
      { status: 400 }
    );
  }
};
