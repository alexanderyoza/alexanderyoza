import React from 'react';
import styles from '../styles/page.module.css'
import '../styles/globals.css';
import Image from 'next/image';

export default function Home() {

    return (
        <main className='container'>           
            <section className={styles.introductionContainer}>
                <div className={styles.sectionContent}>
                    <div className={styles.introText}>
                        <h1>
                            Hello, I'm Alex Yoza.
                        </h1>
                        <h2>
                            Welcome to my portfolio.
                        </h2>
                    </div>
                    <div className={styles.introImage}>
                        <Image src='/portrait.png' alt='portrait' fill={true} sizes="(max-width: 800px) 800px"/>
                    </div>
                </div>
                <div className={styles.skills}>
                    <div className={styles.skillImage}>
                        <Image src='/skills/java.png' alt='java' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/cpp.png' alt='cpp' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/c.png' alt='c' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/python.png' alt='python' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/javascript.png' alt='javscript' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/next.png' alt='next' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/mongo.png' alt='mongo' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                    <div className={styles.skillImage}>
                        <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 100px) 100px"/>
                    </div>
                </div>
                <div className={styles.scroll}>
                    ⌄
                </div>
            </section>
            <section className={styles.schoolContainer}>
                <div className={styles.sectionContent}>
                    <div className={styles.schoolText}>
                        <h1>
                            University of California San Diego
                        </h1>
                        <h2>
                            Bachelor of Science, Computer Science
                        </h2>
                        <h3>
                            September 2021 - December 2024(expected)
                        </h3>
                    </div>
                    <div className={styles.introImage}>
                        <Image src='/ucsd.png' alt='portrait' fill={true} sizes="(max-width: 800px) 800px"/>
                    </div>
                </div>
                <div className={styles.relevantCourses}>
                    <div className={styles.tickerContainer1}>
                        <span>Artificial Intelligence</span>
                        <span> Object Oriented Design </span>
                        <span>Data Structures</span> 
                        <span>Computer Architecture</span>
                        <span>Software Engineering</span>
                        <span>Database Systems</span>
                        <span>Algorithms Design</span>
                    </div>
                    <div className={styles.tickerContainer2}>
                        <span>Artificial Intelligence</span>
                        <span> Object Oriented Design </span>
                        <span>Data Structures</span> 
                        <span>Computer Architecture</span>
                        <span>Software Engineering</span>
                        <span>Database Systems</span>
                        <span>Algorithms Design</span>
                    </div>
                </div>
            </section>
            <section className={styles.workContainer}>
                <h2>
                    Work Experience
                </h2>
                <div className={styles.jobs}>
                    <div className={styles.workCard}>
                        <div className={styles.workImage}>
                            <Image src='/logo.png' alt='freelance web development' fill={true} sizes="(max-width: 200px) 200px"/>
                        </div>
                        <h3>
                            Freelance Web Development
                        </h3>
                        <div className={styles.workDate}>
                            June 2023 - Present
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workImage}>
                            <Image src='/logo.png' alt='freelance web development' fill={true} sizes="(max-width: 200px) 200px"/>
                        </div>
                        <h3>
                            Project Destined
                        </h3>
                        <div className={styles.workDate}>
                            September 2022 - December 2022
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workImage}>
                            <Image src='/logo.png' alt='freelance web development' fill={true} sizes="(max-width: 200px) 200px"/>
                        </div>
                        <h3>
                            Bank of Hawaii
                        </h3>
                        <div className={styles.workDate}>
                            June 2022 - August 2022
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workImage}>
                            <Image src='/logo.png' alt='freelance web development' fill={true} sizes="(max-width: 200px) 200px"/>
                        </div>
                        <h3>
                            Private Event Coordinator
                        </h3>
                        <div className={styles.workDate}>
                            February 2021 - May 2021
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
