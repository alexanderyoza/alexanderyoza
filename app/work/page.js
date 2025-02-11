"use client"

import React from 'react';
import styles from '../../styles/workOverview.module.css'
import '../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Work() {

    return (
        <main className='container'>
            <section className={styles.workContainer} id='work'>
                <div className={styles.jobs}>
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
