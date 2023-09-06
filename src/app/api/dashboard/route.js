import { VerifyToken } from "@/utilities/JwtHelper";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    const token = await request.cookies.get("rt");
    const payload = await VerifyToken(token["value"]);
    if (payload) {
      return NextResponse.json({
        status: true,
        userInfo: payload,
        messgae: "Verified user info provided",
      });
    } else {
      return NextResponse.json({
        status: false,
        userInfo: payload,
        message: "Verified user not found.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: false,
      userInfo: "",
      message: "Verified user not found.",
    });
  }
}
