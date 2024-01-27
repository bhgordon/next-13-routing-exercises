import React from "react";
import Link from "next/link";

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/blue">Blue</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/red">Red</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/violet">Violet</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/white">White</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
