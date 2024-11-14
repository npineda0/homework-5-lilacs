// LAYOUT FOR NESTED ROUTE
"use client";

import Link from "next/link";
import "./guide.css";

export default function GuideLayout({ children }) {
    return (
        <div className="guideLayout">
            <nav>
                <ul>
                    <li>
                        {/* link instead of a tag to better track state */}
                        <Link href="/guide">Caring for Lilacs</Link>
                    </li>
                    <li>
                        <Link href="/guide/problems">Common Problems with Lilacs</Link>
                    </li>
                </ul>
            </nav>
            { children }
        </div>
    )
}