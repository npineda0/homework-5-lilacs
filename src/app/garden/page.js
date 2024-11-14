"use client";
import gardenStyles from "./garden.module.css";


export default function Garden() {
    return(
        <main>
            <h1 className={gardenStyles.gardenHeader}>Growing Lilac Shrubs</h1>

            <div className={gardenStyles.container}>
                <img className={gardenStyles.gardenImg1} src="https://www.almanac.com/sites/default/files/styles/or/public/images/photo_11437.jpg.webp?itok=R5h8sb8-" />
                <div className={gardenStyles.gardenTxt}>
                    <p> The common lilac, Syringa vulgaris, is well-loved for its toughness,
                        reliability, and fragrance. In fact, lilacs are so tough that they
                        can grow for 100+ years, often outliving the homes they were planted
                        around. The fragrant flowers are good for cutting and are attractive
                        to butterflies.
                        <br></br> <br></br>
                        While the blooms are usually lilac/purple in color (from very pale to very dark),
                        there are also lilac varieties in white and cream and even pink and yellow.
                        Individual flowers can be single or double. In northern states, lilacs bloom for
                        about two weeks from mid-to-late spring. However, there are early-, mid-, and
                        late-season lilacs, which, when grown together, ensure a steady bloom for at least
                        six weeks.
                    </p>
                </div>
            </div>

            <div className={gardenStyles.container}>
                <div className={gardenStyles.gardenTxt}>
                    <p> The common lilac, Syringa vulgaris, is well-loved for its toughness,
                        reliability, and fragrance. In fact, lilacs are so tough that they
                        can grow for 100+ years, often outliving the homes they were planted
                        around. The fragrant flowers are good for cutting and are attractive
                        to butterflies.
                        <br></br> <br></br>
                        While the blooms are usually lilac/purple in color (from very pale to very dark),
                        there are also lilac varieties in white and cream and even pink and yellow.
                        Individual flowers can be single or double. In northern states, lilacs bloom for
                        about two weeks from mid-to-late spring. However, there are early-, mid-, and
                        late-season lilacs, which, when grown together, ensure a steady bloom for at least
                        six weeks.
                    </p>
                </div>
                <img className={gardenStyles.gardenImg2} src="https://d9zqppyx20g7i.cloudfront.net/blog/34959/10_fascinating_facts_about_lilacs__large.jpg" />
            </div>
        </main>
    )
}