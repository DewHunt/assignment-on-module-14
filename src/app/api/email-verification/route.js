import { VerifyToken } from "@/utilities/JwtHelper";
import { TokenCookie } from "@/utilities/TokenCookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  try {
    const requestData = await request.json();
    const otp = requestData["otp"];
    const token = request.cookies.get("rt");
    const payload = await VerifyToken(token["value"]);
    const verificationCode = payload["verificationCode"];

    if (verificationCode === parseInt(otp)) {
      cookies().delete("rt");
      payload["isVerified"] = true;
      const cookie = await TokenCookie(payload, "rt");
      return NextResponse.json(
        {
          status: true,
          message: "Email verified successful",
        },
        { status: 200, headers: cookie }
      );
    } else {
      return NextResponse.json({
        status: false,
        message: "Email not verified, Please enter valid OTP.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: false,
      message:
        "You Email is not registered Or Email not verified, Please enter valid OTP.",
    });
  }
}
