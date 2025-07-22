"use client"

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
                            Svelte
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/svelte.png' alt='svelte' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
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
                            Angular
                        </div>
                        <div className={styles.skillImageContainer}>
                            <Image src='/skills/angular.png' alt='angular' fill={true} sizes="(max-width: 100px) 100px" className={styles.skillImage}/>
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
                </div>
            </section>
            <section className={styles.schoolContainer}>
                <div className={styles.sectionContent}>
                    <div className={styles.schoolText}>
                        <h1>
                            University of California San Diego
                        </h1>
                        <h2>
                            La Jolla, California
                        </h2>
                        <h2>
                            Bachelor of Science, Computer Science
                        </h2>
                        <h3>
                            September 2021 - December 2024
                        </h3>
                    </div>
                    <div className={styles.introImage}>
                        <Image src='/ucsd.png' alt='portrait' fill={true} sizes="(max-width: 800px) 800px"/>
                    </div>
                </div>
                <div className={styles.relevantCourses}>
                    <div className={styles.tickerContainer1}>
                        <span>Artificial Intelligence</span>
                        <span>Object Oriented Design</span>
                        <span>Data Structures</span> 
                        <span>Computer Architecture</span>
                        <span>Software Engineering</span>
                        <span>Database Systems</span>
                        <span>Algorithms Design</span>
                        <span>Cryptography</span>
                        <span>Operating Systems</span>
                    </div>
                    <div className={styles.tickerContainer2}>
                        <span>Artificial Intelligence</span>
                        <span> Object Oriented Design </span>
                        <span>Data Structures</span> 
                        <span>Computer Architecture</span>
                        <span>Software Engineering</span>
                        <span>Database Systems</span>
                        <span>Algorithms Design</span>
                        <span>Cryptography</span>
                        <span>Operating Systems</span>
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
                            Mitaka, Tokyo, Japan
                        </h2>
                        <h2>
                            One-Term Exchange Program
                        </h2>
                        <h3>
                            August 2024 - November 2024 
                        </h3>
                    </div>
                    <div className={styles.introImage}>
                        <Image src='/icu.png' alt='portrait' fill={true} sizes="(max-width: 800px) 800px"/>
                    </div>
                </div>
            </section>
        </main>
    )
}
