"use client";

import Link from "next/link";
import sunlightStyles from "./sunlight.module.css";


export default function Sunlight() {
    return(
        <main>
            <h1 className={sunlightStyles.header}>Sunlight</h1>
            <p className={sunlightStyles.txt}>
            The ideal spot to plant lilacs is in an area with full sun (at least 6 to 8 hours per day)—give them too much shade and they may not bloom. Lilacs also like slightly alkaline, moist, well-drained soil.
            <br></br> <br></br>
            The best time to plant lilacs is in late fall before the ground freezes. The next best time to plant is in early spring after the ground thaws. Realistically, you&apos;re probably going to have to plant lilacs when you can find them at the garden center, and that&apos;s fine—they may just need more watering if you end up planting them during a warmer time of year.
            </p>
            <button className={sunlightStyles.btn}><Link className={sunlightStyles.route} href="/guide">Go Back</Link></button>
        </main>
    )
}