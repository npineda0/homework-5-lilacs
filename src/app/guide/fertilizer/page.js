"use client";

import Link from "next/link";
import fertilizerStyles from "./fertilizer.module.css";


export default function Fertilizer() {
    return(
        <main>
            <h1 className={fertilizerStyles.header}>Fertilizer</h1>
            <p className={fertilizerStyles.txt}>
            To get lilacs off to a nutrient-filled start, improve individual planting holes by blending Miracle-Gro® Garden Soil for Trees & Shrubs with the native soil in a 50:50 ratio. This garden soil also contains phosphorus and iron to encourage root growth and help prevent leaves from yellowing.
            <br></br> <br></br>
            After they&apos;ve bloomed in the spring, feed lilacs with Miracle-Gro® Shake &apos;n Feed® Flowering Trees & Shrubs Plant Food (following label directions) to help grow strong roots. This plant food is chock-full of ingredients—like kelp, earthworm castings, feather meal, and bone meal—that feed the microbes in the soil, which in turn break down organic matter into nutrients for your plants.
            </p>
            <button className={fertilizerStyles.btn}><Link className={fertilizerStyles.route} href="/guide">Go Back</Link></button>
        </main>
    )
}