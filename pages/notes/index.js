import React from "react";
import Link from "next/link";
// import color from "../../styles/notes.module.css";

export default function Notes() {
  return (
    <div>
      <h1>Notes</h1>
      <p>
        <Link href="notes/[id]" as={`/notes/1`}>
          <a>Note path to note 1</a>
        </Link>
      </p>
    </div>
  );
}
