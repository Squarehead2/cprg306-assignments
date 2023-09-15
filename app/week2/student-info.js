import React from "react";
import Link from "next/link";

export default function Student() {
  return (
    <main>
      <p>Will Black</p>
      <p>CPRG 306 A</p>
      <Link href="https://github.com/Squarehead2/cprg306-assignments_will_black">
        {" "}
        Github{" "}
      </Link>
    </main>
  );
}
