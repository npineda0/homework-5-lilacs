import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <h1>Home</h1>
      <img src="https://arborhilltrees.com/blog/wp-content/uploads/2020/06/common-purple-lilac-facts.jpg" />
      <p>
        <span>Welcome!</span>
        In this website you will get to learn more about Lilacs, such the
        culture, usage, fun facts, and how to garden them!
      </p>
      <p>
        If you have any more fun facts that you want to submit please use the
        form to submit the fun facts!
      </p>

      <Link href="/form">Form</Link>
    </main>
  );
}
