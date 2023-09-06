"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AuthenticationMenu from "../authentication-menu/AuthenticationMenu";
import DashboardMenu from "../dashboard-menu/DashboardMenu";

export default function MainMenu() {
  const [isHasToken, setIsHasToken] = useState(false);

  useEffect(() => {
    (async () => {
      let result = await fetch("/api/token");
      result = await result.json();
      setIsHasToken(result.isHasToken);
    })();
  }, []);
  return (
    <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link active font-siliguri">
              Home
            </Link>
          </li>
          {isHasToken === true ? <DashboardMenu /> : <AuthenticationMenu />}
        </ul>
      </div>
    </nav>
  );
}
