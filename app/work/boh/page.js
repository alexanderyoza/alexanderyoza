import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Boh() {
    return (
        <main className='container'>
            <div className={styles.top}>
                <div className={styles.workImageContainer}>
                    <Image src='/work/boh.png' alt='bank of hawaii logo' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                </div>
                <div className={styles.date}>
                    June 2022 - August 2022
                </div>
            </div>
            <div className={styles.experienceImageContainer}>
                <Image src='/work/boh-work.jpg' alt='bank of hawaii sample' fill={true} sizes="(max-width: 300px) 300px" className={styles.experienceImage}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>
                        <div className={styles.company}>
                            Bank of Hawaii
                        </div>
                        <div className={styles.position}>
                            eSolutions Development Intern
                        </div>
                    </div>
                    <div className={styles.location}>
                        Honolulu, Hawaii
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        <span>•</span>
                        Automated redundant bank processes using Microsoft Power Automate, streamlining workflows and enhancing operational efficiency.
                    </div>
                    <div><span>•</span>
                        Collaborated with the Software Engineering team to break down and delegate project tasks, ensuring timely completion and team alignment.
                    </div>
                    <div>
                        <span>•</span>
                        Saved 1,500+ hours annually by automating manual bank reporting and processing tasks.
                    </div>
                    <div>
                        <span>•</span>
                        Created Python scripts to process thousands of daily bank transactions and generate accurate reports.
                    </div>
                </div>
            </div>
            <Link href='/work' className={styles.back}>Go Back</Link>
        </main>
    )
}