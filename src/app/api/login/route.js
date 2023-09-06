import { VerifyToken } from "@/utilities/JwtHelper";
import { TokenCookie } from "@/utilities/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const requestData = await request.json();
  const email = requestData["email"];
  const password = requestData["password"];

  const token = request.cookies.get("rt");
  const payload = await VerifyToken(token["value"]);
  const userEmail = payload["email"];
  const userPassword = payload["password"];
  const isVerified = payload["isVerified"];

  if (isVerified) {
    if (email === userEmail && password === userPassword) {
      const cookie = await TokenCookie({ email }, "lt");
      return NextResponse.json(
        { status: true, isVerified: true, messgae: "Login Successful" },
        { status: 200, headers: cookie }
      );
    } else {
      return NextResponse.json({
        status: false,
        isVerified: true,
        message: "Login Failed. Email Or Password not matched",
      });
    }
  } else {
    return NextResponse.json({
      status: false,
      isVerified: false,
      message: "Login Failed. Email not verified. Please register your email.",
    });
  }
}
