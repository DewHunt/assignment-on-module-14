import Link from "next/link";

const AuthenticationMenu = () => {
  return (
    <>
      <li className="nav-item">
        <Link href="/login" replace className="nav-link font-siliguri">
          Login
        </Link>
      </li>
      <li>
        <Link href="/registration" replace className="nav-link font-siliguri">
          Registration
        </Link>
      </li>
    </>
  );
};

export default AuthenticationMenu;
