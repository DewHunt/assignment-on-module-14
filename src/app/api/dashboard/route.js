import { VerifyToken } from "@/utilities/JwtHelper";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  const token = await request.cookies.get("rt");
  const payload = "";
  if (token) {
    payload = await VerifyToken(token["value"]);
  }
  if (payload) {
    return NextResponse.json({ status: true, userInfo: payload });
  } else {
    return NextResponse.json({ status: false, userInfo: payload });
  }
}
