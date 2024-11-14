"use client";
import problemStyles from "./problems.module.css";


export default function Problems() {
    return(
        <main>
            <h1 className={problemStyles.header}>Common Problems</h1>

            <h2 className={problemStyles.secondHeader}>Powdery Mildew</h2>
            <p className={problemStyles.txt}>
            The best way to avoid this? Buy and plant powdery mildew-resistant lilac varieties (check the plant tag or online description). It also helps to plant lilacs where there's plenty of air circulation. Don't bother spraying to control this fungal disease, as it will eventually go away on its own.
            </p>

            <h2 className={problemStyles.secondHeader}>Insects</h2>
            <p className={problemStyles.txt}>
            The lilac borer insect, a clear-wing moth that looks like a paper wasp, damages the plant by tunneling into the wood (it also infests ash trees). Insecticides that attack lilac borers should be applied during the period when eggs are laid and hatching, from spring into early summer.
            </p>
        </main>
    )
}