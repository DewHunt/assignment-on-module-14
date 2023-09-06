"use client";
import { useEffect } from "react";

const page = async () => {
  useEffect(() => {
    (async () => {
      let result = await fetch("api/logout");
      result = await result.json();
      if (result.status) {
        window.location.href = "/";
      }
    })();
  }, []);
  return <div></div>;
};

export default page;
