import Link from "next/link";

const DashboardMenu = () => {
  return (
    <>
      <li className="nav-item">
        <Link href="/dashboard" replace className="nav-link font-siliguri">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/logout" className="nav-link font-siliguri">
          Logout
        </Link>
      </li>
    </>
  );
};

export default DashboardMenu;
