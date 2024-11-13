import styles from "./festivals.module.css";

export default function Festivals() {
  return (
    <main className={styles.mainFestivals}>
      <h1>Festivals</h1>

      <div className={styles.festHolder}>
        <div className={styles.festInfoCard}>
          <h2>Mackinac Island</h2>
          <p>JUNE 6 - 15, 2025</p>
          <p>THEME: Mackinac Island is COOL</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Rochester, New York</h2>
          <p>No information for 2025 yet.</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Arnold Arboretum</h2>
          <p>MAY 11, 2025</p>
          <p>10:00am-3:00pm</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Lombard, Illinois</h2>
          <p>No information for 2025 yet.</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Hamilton, Ontario</h2>
          <p>No information for 2025 yet.</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Spokane, Washington</h2>
          <p>Festival Week</p>
          <p>MAY 10-17, 2025</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Franktown, Ontario</h2>
          <p>No information for 2025 yet.</p>
        </div>

        <div className={styles.festInfoCard}>
          <h2>Calgary, Alberta</h2>
          <p>SUNDAY JUNE 1st, 2025</p>
          <p>10:00am-6:00pm 12th Avenue & Elbow Drive SW</p>
        </div>
      </div>
    </main>
  );
}
