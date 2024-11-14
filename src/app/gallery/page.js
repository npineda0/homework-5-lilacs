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
      <div className={styles.yourGallery}>
        <h1>Your Gallery:</h1>
        <div className={styles.yourGalleryContent}>
          <div className={styles.galleryImages}>
            <p id="emptyGalleryText">No pictures in your gallery</p>
          </div>
          <button>Add pictures +</button>
        </div>
      </div>
      <form>
        {/* <label htmlFor="addImg">Image</label> */}
        {/* <input
          onChange={onFileUpload}
          type="file"
          accept="image/*"
          id="addImg"
          name="addImg"
        ></input> */}
      </form>
    </main>
  );
}
