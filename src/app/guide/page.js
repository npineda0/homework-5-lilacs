"use client";

import Link from "next/link";
import guideStyles from "./guide.module.css";


export default function Guide() {
    return(
        <main>
            <h1 className={guideStyles.header}>How to Garden Lilacs</h1>

            <div className={guideStyles.container}>
                <div className={guideStyles.topic}>
                    <img className={guideStyles.img} src="https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png" alt="sun img"/>
                    <p className={guideStyles.text}>Sunlight</p>
                    <button className={guideStyles.btn}><Link className={guideStyles.route} href="/guide/sunlight">Learn More!</Link></button>
                </div>

                <div className={guideStyles.topic2}>
                    <img className={guideStyles.img2} src="https://wallpapers.com/images/hd/young-plant-growing-in-soil-20uvar4sx1dxvgj0.png" alt="soil img"/>
                    <p className={guideStyles.text}>Soil</p>
                    <button className={guideStyles.btn}><Link className={guideStyles.route} href="/guide/soil">Learn More!</Link></button>
                </div>
            </div>

            <div className={guideStyles.container}>
                <div className={guideStyles.topic3}>
                    <img className={guideStyles.img3} src="https://static.vecteezy.com/system/resources/thumbnails/012/377/781/small_2x/watering-can-icon-sign-symbol-png.png" alt="sun img"/>
                    <p className={guideStyles.text}>Watering</p>
                    <button className={guideStyles.btn}><Link className={guideStyles.route} href="/guide/water">Learn More!</Link></button>
                </div>

                <div className={guideStyles.topic4}>
                    <img className={guideStyles.img4} src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-fertilizer-for-planting-like-tree-and-flower-png-image_5683990.png" alt="soil img"/>
                    <p className={guideStyles.text}>Fertilizer</p>
                    <button className={guideStyles.btn}><Link className={guideStyles.route} href="/guide/fertilizer">Learn More!</Link></button>
                </div>
            </div>

        </main>
    )
}