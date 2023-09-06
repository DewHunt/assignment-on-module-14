import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  cookies().delete("lt");
  cookies().delete("rt");
  return NextResponse.json({ status: true, message: "Logout Successful" });
}
