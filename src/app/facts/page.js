import Link from "next/link";
import factStyle from "./fact.module.css";

export default function FunFacts() {
  return (
    <main className={factStyle.factContent}>
      <h1>Fun Facts!</h1>
      <div>
        <h3>Fun Fact 1</h3>
        <img src="https://www.provenwinnerscolorchoice.com/wp-content/uploads/2020/12/Syringa-Scentara-Pura-5.jpg" />
        <p>Each Lilac Color Has a Different Meaning</p>
        <Link href="/facts/factOne">Read More</Link>
      </div>
      <div>
        <h3>Fun Fact 2</h3>
        <img src="https://www.myseeds.co/cdn/shop/files/SyringaoblataEarlyLilacshrub001_1024x1024.jpg?v=1689173010" />
        <p>Lilacs Were an Early Presidential Favorite</p>
        <Link href="/facts/factTwo">Read More</Link>
      </div>
      <div>
        <h3>Fun Fact 3</h3>
        <img src="https://www.lotuswei.com/cdn/shop/products/Lilac_Photo_1200x.jpg?v=1639608770" />
        <p>Lilacs Are Relics of Old Homesteads</p>
        <Link href="/facts/factThree">Read More</Link>
      </div>
    </main>
  );
}
