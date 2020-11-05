import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <p>
        <Link href="/notes">
          <a>Notes Page</a>
        </Link>
      </p>
    </div>
  );
}
