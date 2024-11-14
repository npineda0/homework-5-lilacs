"use client";

import Link from "next/link";
import soilStyles from "./soil.module.css";


export default function Soil() {
    return(
        <main>
            <h1 className={soilStyles.header}>Soil</h1>
            <p className={soilStyles.txt}>
            Lilacs grow best in slightly alkaline (6.5 to 7.0 pH), moist, well-drained soil high in organic matter, so do a soil test before planting. If the pH is below 5.5, you'll need to add lime to increase it. Once you've achieved the right pH, it's time to prepare the soil.
            <br></br> 
            
            </p>
            <button className={soilStyles.btn}><Link className={soilStyles.route} href="/guide">Go Back</Link></button>
        </main>
    )
}