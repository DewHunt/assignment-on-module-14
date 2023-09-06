import { TokenCookie } from "@/utilities/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const requestData = await request.json();
  const { ...userInfo } = requestData;
  const cookie = await TokenCookie(userInfo, "rt");
  return NextResponse.json(
    { status: true, message: "Registration Successful" },
    { status: 200, headers: cookie }
  );
}
