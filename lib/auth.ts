import { cookies } from "next/headers";

const COOKIE_NAME = "site_auth";
const COOKIE_VALUE = "authenticated";

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const auth = cookieStore.get(COOKIE_NAME);
  return auth?.value === COOKIE_VALUE;
}

export { COOKIE_NAME, COOKIE_VALUE };
