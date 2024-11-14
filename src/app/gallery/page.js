import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <main className={styles.mainGallery}>
      <h1>Gallery</h1>
      {/* <p>Add picture</p> */}
      <div className={styles.imageHolder}>
        <img src="/lilac1.jpg" />
        <img src="/lilac2.jpg" />
        <img src="/lilac3.jpg" />
        <img src="/lilac4.jpg" />
        <img src="/lilac5.jpg" />
        <img src="/lilac6.jpg" />
        <img src="/lilac7.jpg" />
        <img src="/lilac8.jpg" />
        <img src="/lilac9.jpg" />
        <img src="/lilac10.jpg" />
      </div>
    </main>
  );
}
