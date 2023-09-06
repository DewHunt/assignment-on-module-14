"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="not-found">
          <span className="text-danger">Oops sorry!</span>
        </h1>
        <p>There was an Error, please try again!</p>
        <Link className="home-link" href="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
