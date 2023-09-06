import { NextResponse } from "next/server";
import { VerifyToken } from "../JwtHelper";

export async function CheckCookieAuth(req) {
  try {
    const token = req.cookies.get("lt");
    const payload = await VerifyToken(token["value"]);
    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export async function CheckCookieAuthForLogin(req) {
  try {
    const token = req.cookies.get("lt");
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export async function CheckCookieAuthForVerifyEmail(req) {
  try {
    const token = req.cookies.get("rt");
    const payload = await VerifyToken(token["value"]);
    const requestHeader = new Headers(req.headers);
    requestHeader.set("id", payload["id"]);
    requestHeader.set("name", payload["name"]);
    requestHeader.set("userName", payload["userName"]);
    requestHeader.set("email", payload["email"]);
    requestHeader.set("password", payload["password"]);
    requestHeader.set("verificationCode", payload["verificationCode"]);
    requestHeader.set("isVerified", payload["isVerified"]);
    if (payload["isVerified"] === false) {
      return NextResponse.next({ request: { headers: requestHeader } });
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/registration", req.url));
  }
}
