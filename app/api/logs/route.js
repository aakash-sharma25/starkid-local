import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("this function is called");
  return NextResponse.json({ messgae: "success" }, { status: 200 });
}
