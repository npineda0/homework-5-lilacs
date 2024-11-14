"use client";

import { useState } from "react";
import questionStyles from "./questions.module.css";


export default function Questions() {
    //form name
    const [name, setName] = useState("");
    //thank you message for submitting contact form
    const [message, setMessage] = useState(false);

    function formMessage(e) {
        e.preventDefault();

        setTimeout(() => {
            //message pop up
            setMessage(true);
            setTimeout(() => setMessage(false), 4000);
          }, 1000);
    }

    return(
        <main>
            <h1 className={questionStyles.header} >FAQ for Gardening Lilacs:</h1>

            <h2 className={questionStyles.header2}>Can&apos;t find the answer to your question?
                <br></br> Fill out our form and we&apos;ll get right back to you!
            </h2>

            <div className={questionStyles.formBackground}>
                <form onSubmit={formMessage}>
                    <div>
                        <label placeholder="FullName"></label>
                        <input className={questionStyles.input} type="text"  name="fullname" placeholder="Full Name" value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label placeholder="email"></label>
                        <input className={questionStyles.input} name="email" type="email"  placeholder="Email"/>
                    </div>
                    <div>
                        <label placeholder="Question"></label>
                        <input className={questionStyles.input} type="text" name="message"  placeholder="Question"/>
                    </div>
                    <div>
                        <input className={questionStyles.btn} type="submit" value="Submit Question" />
                    </div>
                </form>
                {/* message */}
                {message && <p className={questionStyles.formMsg}>Thank you {name} for your message! <br/> We&apos;ll get back to you as soon as possible!</p>}
            </div>

            <div className={questionStyles.container}>
                <p className={questionStyles.question}><b>Q:</b> <i>How to Deadhead Lilacs?</i></p>
                <p className={questionStyles.answer}><b>A:</b> Once young lilacs begin to flower (be patient—this may take a few years!), take time to deadhead by cutting off faded flowers off at the base right after they begin to wilt and fade. This will encourage the plant to put more energy into forming new flower buds for the following spring.</p>
            </div>

            <div className={questionStyles.container}>
                <p className={questionStyles.question}><b>Q:</b> <i>How to Prune Lilacs?</i></p>
                <p className={questionStyles.answer}><b>A:</b> Newer, smaller varieties of lilacs need less pruning than the large common lilacs, but all lilacs will grow better and produce more flowers with occasional pruning. Here are some options:
                    If you have an older lilac shrub that isn&apos;t blooming even though it&apos;s getting plenty of sun, cut it down to 8 inches above the ground in late winter (March or April), then let it grow out. The following March, select the best-looking 8 to 10 stems and cut them back by half. Cut the rest to the ground. You should see new blooms the following year.
                    To rejuvenate shrubs that aren&apos;t blooming well without cutting the entire shrub to the ground, selectively remove 1/3 of the branches all the way back to the ground each year.
                    Prune for size by cutting back branches immediately after the shrub finishes flowering.</p>
            </div>

            <div className={questionStyles.container}>
                <p className={questionStyles.question}><b>Q:</b> <i>How to Transplant Lilacs?</i></p>
                <p className={questionStyles.answer}><b>A:</b> Transplanting a young lilac is easier than accommodating the movement of an older one, since the bushes can grow up to 15 feet tall and 12 feet wide, with a root ball about 50 percent wider than the width of the shrub.

Plan to move the shrub during its dormant period in late winter, before leaves and buds appear. When transplanting, dig a hole that&apos;s about twice as big as the root ball, and ensure none of the root ball sticks out above the top of the soil. Water deeply and regularly to allow the roots to establish themselves in the new spot.</p>
            </div>

            <div className={questionStyles.container}>
                <p className={questionStyles.question}><b>Q:</b> <i>How to Care for Lilacs in the Winter?</i></p>
                <p className={questionStyles.answer}><b>A:</b> Hardy lilacs can thrive in even the coldest parts of the United States, withstanding winter temperatures that drop to -60 degrees Fahrenheit. They require a cold dormancy period to survive, and need little to no assistance to survive the winter. Add mulch to ensure the roots remain covered during the winter, and consider wrapping the plant to protect delicate buds from an early spring freeze.</p>
            </div>

            <div className={questionStyles.container}>
                <p className={questionStyles.question}><b>Q:</b> <i>How to Care for Lilacs in Containers?</i></p>
                <p className={questionStyles.answer}><b>A:</b> Smaller, dwarf lilacs can grow in containers, though you need a large pot—at least 2 feet in diameter—to make sure that the roots remain completely covered. Since lilacs require a dormant cold period to bloom, leave the lilacs outside during the winter, burying them for insulation if you live in an especially cold climate.</p>
            </div>
        </main>
    )
}