import React from "react";
import { useRouter } from "next/router";

export default function NotePage() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Note Page {id}</h1>;
}

//catch-all routes
//[...yourParam].js
//include the parent
//notes/[[...yourParam]].js
