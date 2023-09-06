import {
  CheckCookieAuth,
  CheckCookieAuthForLogin,
  CheckCookieAuthForVerifyEmail,
} from "./utilities/middleware/CheckCookieAuth";

export async function middleware(request, response) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(request);
  }

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/registration")
  ) {
    return await CheckCookieAuthForLogin(request);
  }

  if (request.nextUrl.pathname.startsWith("/email-verification")) {
    return await CheckCookieAuthForVerifyEmail(request);
  }
}
