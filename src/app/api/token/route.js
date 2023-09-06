import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = cookies().get("lt");
  let isHasToken = false;
  if (token) {
    isHasToken = true;
  }
  return NextResponse.json({ isHasToken });
}
