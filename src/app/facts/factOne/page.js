import oneStyle from "./one.module.css";

export default function factOne() {
  return (
    <main className={oneStyle.colorStyle}>
      <h1>Each Lilac Color Has a Different Meaning</h1>

      <h4>
        Lilac comes in various of colors and each color represent different
        things. When it comes to While Lilacs it represent purity and innocence.
        Purple lilacs symbolizes spirituality. If they are blue then it
        represents happiness and tranquility.
      </h4>
      <div>
        <h3>White Lilac</h3>
        <img src="https://bowerandbranch.com/cdn/shop/products/CommonWhiteLilac1_480x.png?v=1644329253" />
        <p>Represent Purity and Innocence</p>
      </div>
      <div>
        <h3>Purple Lilac</h3>
        <img src="https://naturehills.com/cdn/shop/files/0d1b45a6-eaa1-4637-9a79-d22264e9686c_3d204f76-d620-4f1f-a2b0-bde8d9ffa5a7.jpg?v=1722028455&width=1214" />
        <p>Represent Spirituality</p>
      </div>
      <div>
        <h3>Blue Lilac</h3>
        <img src="https://m.media-amazon.com/images/I/61HrtsbeQ2L._AC_UF894,1000_QL80_.jpg" />
        <p>Represent Happiness and Tranquility</p>
      </div>
    </main>
  );
}
