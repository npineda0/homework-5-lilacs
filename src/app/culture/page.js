import styles from "./culture.module.css";
import Link from "next/link";

export default function Culture() {
  return (
    <main className={styles.mainCulture}>
      <div>
        <h1>Symbolism</h1>

        <p>
          Lilacs have many symbolic meanigs and their colors have a significant
          role in their symbolism.
        </p>

        <p>
          In general the species symbolizes renewal but is also asscociated with
          joy of youth, innocence of love, and purity of emotion.
        </p>

        <h2>Colors</h2>
        {/* <img src="/lilacs.webp" /> */}
        <p>
          Purple lilacs symbolize first love but also spirituality while lilacs
          that are more blue symbolize happiness and tranquility. Magenta lilacs
          symbolize love and passion. White lilacs represent purity and
          innocence.
        </p>
        <h2>Other</h2>
        <p>
          In Greece, Macedonia, Lebanon, and Cyprus, the lilac is strongly
          associated with Easter time because it flowers around that time; it is
          consequently called paschalia.
        </p>

        <p>
          Syringa vulgaris is the state flower of New Hampshire, because it "is
          symbolic of that hardy character of the men and women of the Granite
          State."
        </p>

        <p>
          The music-hall song by Ivor Novello, We'll Gather Lilacs, first
          performed in 1945, speaks of the longing of two lovers to be reunited
          in a traditional English rural setting. It has since been recorded and
          performed by numerous artists.
        </p>
      </div>
      <div>
        <h1>Festivals</h1>

        <img src="/lilacs-festival.jpg" />

        <p>
          There are festivals that celebrate lilacs and their significance to
          the area where the festivals are held.
        </p>

        <h3>Arnold Arboretum</h3>
        <p>
          The Arnold Arboretum in Boston, Massachusetts celebrates "Lilac
          Sunday" every May. The Arboretum shows off its collection of over 422
          lilac plants, of 194 different varieties. Lilac Sunday is the only day
          of the year when picnicking is allowed on the grounds of the
          Arboretum.
        </p>

        <h3>Lombard, Illinois</h3>
        <p>
          Lombard, Illinois, called the "Lilac Village", which has an annual
          lilac festival and parade in May. The village also contains Lilacia
          Park, a garden with over 200 varieties of lilacs, as well as over 50
          kinds of tulips.
        </p>

        <h3>Mackinac Island</h3>
        <p>
          Mackinac Island, in Michigan, which celebrates a weeklong lilac
          festival and lilac parade each June.
        </p>

        <h3>Rochester, New York</h3>
        <p>
          Rochester, New York, which has held its Lilac Festival since 1898,
          hosts the longest-running festival in North America. Held in Highland
          Park, this celebration features 1,200 shrubs, representing over 500
          varieties, many of which were developed in Rochester. It is the
          largest collection of varieties at any single place.
        </p>

        <h3>Hamilton, Ontario</h3>
        <p>
          The Royal Botanical Gardens near Hamilton, Ontario, which holds its
          Lilac Celebration each May.
        </p>

        <h3>Spokane, Washington</h3>
        <p>
          Spokane, Washington, known as the "Lilac City", which holds an annual
          lilac festival and lilac parade.
        </p>

        <h3>Franktown, Ontario</h3>
        <p>
          Franktown, Ontario, Canada, known as the Lilac Capital of Canada,
          holds an annual festival. With drystone masonry demonstrations and
          horse pulled wagon rides.
        </p>

        <h3>Calgary, Alberta</h3>
        <p>
          Calgary, Alberta, Canada holds an annual one-day Lilac Festival, which
          is primarily a street festival.
        </p>
      </div>
      <Link href="/culture/festivals">
        <button>Learn when lilacs festivals are happening!</button>
      </Link>
    </main>
  );
}
