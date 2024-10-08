import React from 'react';
import styles from '../styles/page.module.css'
import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

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
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            Java
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/java.png' alt='java' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            C++
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/cpp.png' alt='cpp' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            C
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/c.png' alt='c' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            Python
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/python.png' alt='python' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            Javascript
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/javascript.png' alt='javascript' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            React.js
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            Next.js
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/next.png' alt='nextjs' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            Firebase
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            Node.js
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            MongoDB
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/mongo.png' alt='mongo' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            git
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
                    </div>
                    <div className={styles.popupContainer}>
                        <div className={styles.popup}>
                            GitHub
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
                        </div>
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
            <section className={styles.schoolContainer}>
                <div className={styles.sectionContent}>
                    <div className={styles.schoolText}>
                        <h1>
                            International Christian University
                        </h1>
                        <h2>
                            Tokyo, Japan
                        </h2>
                        <h3>
                            August 2024 - November 2024 (One-Term Exchange Program)
                        </h3>
                    </div>
                    <div className={styles.introImage}>
                        <Image src='/icu.png' alt='portrait' fill={true} sizes="(max-width: 800px) 800px"/>
                    </div>
                </div>
            </section>
            <section className={styles.workContainer}>
                <h2>
                    Work Experience
                </h2>
                <div className={styles.jobs}>
                    <div className={styles.workCard}>
                        <div className={styles.workImageContainer}>
                            <Image src='/work/sdsc.jpeg' alt='sdsc' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                        </div>
                        <h3>
                            San Diego Supercomputer Center
                        </h3>
                        <h4>
                            SDSC Developer Intern
                        </h4>
                        <div className={styles.workDate}>
                            June 2024 - August 2024
                        </div>
                        <Link href='/work/sdsc' className={styles.learnMore}>Learn More</Link>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workImageContainer}>
                            <Image src='/logo.png' alt='freelance web development' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage} />
                        </div>
                        <h3>
                            AGY LLC
                        </h3>
                        <h4>
                            Web Developer and Consultant
                        </h4>
                        <div className={styles.workDate}>
                            June 2023 - Present
                        </div>
                        <Link href='/work/agyllc' className={styles.learnMore}>Learn More</Link>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workImageContainer}>
                            <Image src='/work/boh.png' alt='bank of hawaii' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                        </div>
                        <h3>
                            Bank of Hawaii
                        </h3>
                        <h4>
                            eSolutions Development Intern
                        </h4>
                        <div className={styles.workDate}>
                            June 2022 - August 2022
                        </div>
                        <Link href='/work/boh' className={styles.learnMore}>Learn More</Link>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workImageContainer}>
                            <Image src='/work/xxi.JPG' alt='private event coordinator' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                        </div>
                        <h3>
                            Prom XXI
                        </h3>
                        <h4>
                            Private Event Coordinator
                        </h4>
                        <div className={styles.workDate}>
                            February 2021 - May 2021
                        </div>
                        <Link href='/work/xxi' className={styles.learnMore}>Learn More</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
