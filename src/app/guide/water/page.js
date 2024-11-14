"use client";

import Link from "next/link";
import waterStyles from "./water.module.css";


export default function Water() {
    return(
        <main>
            <h1 className={waterStyles.header}>Watering</h1>
            <p className={waterStyles.txt}>
            After planting, check plants often and water whenever the top inch of soil becomes dry, usually once or twice per week. Count to 10 while you water to make sure you&apos;re giving each lilac plant enough moisture. (Leaves will begin to droop if the plant is getting too dry.) Once plants have been in the ground for a couple of months, you can cut back to watering every other week. During the second growing season and beyond, lilacs won&apos;t need extra water unless your area hasn&apos;t seen rain for a month or more.
            <br></br> 
            </p>
            <button className={waterStyles.btn}><Link className={waterStyles.route} href="/guide">Go Back</Link></button>
        </main>
    )
}