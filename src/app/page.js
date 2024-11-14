import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.home}>
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
      </div>

      <div className={styles.galleryMention}>
        <h2>Our gallery</h2>
        <p>View our gallery of lilacs and add more to your personal gallery!</p>
        <div className={styles.toGallery}>
          <Link href="/gallery">
            <button>View Gallery</button>
          </Link>
        </div>
      </div>

      <div className={styles.guideContainer}>
        <h2 className={styles.header}>View our Gardening Guide:</h2>
        <div className={styles.guideDetails}>
          <Link  className={styles.route} href="/guide">
          <div className={styles.caring}>
            <p className={styles.txt}>Caring for Lilacs</p>
          </div>
          </Link>
          <Link  className={styles.route} href="/guide/problems">
          <div className={styles.problems}>
            <p className={styles.txt}>Common Problems with Lilacs</p>
          </div>
          </Link>
        </div>
      </div>

    </main>
  );
}
