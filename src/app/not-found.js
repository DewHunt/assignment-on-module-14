import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="not-found">
          <span className="text-danger">404</span>
          <span className="text-success ms-2 me-2">|</span>
          <span className="text-danger">Not Found</span>
        </h1>
        <p>Could not find requested resource</p>
        <Link className="home-link" href="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
