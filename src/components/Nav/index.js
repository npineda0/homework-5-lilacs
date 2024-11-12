import Link from "next/link";
import navStyles from "./nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.mainNav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/culture">Culture</Link>
        </li>
        <li>
          <Link href="/uses">Uses</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/garden">Gardening</Link>
        </li>
        <li>
          <Link href="/guide">Guide</Link>
        </li>
        <li>
          <Link href="/questions">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}
