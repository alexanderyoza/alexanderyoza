import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';

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
                    <div>Expanded technical skills by automating bank processes using Microsoft Power Automate.</div>
                    <div>Collaborated with the Software Engineering team to breakdown and delegate project tasks.</div>
                    <div>Automated 1500+ hours per year of previously manual bank reporting and processing.</div>
                    <div>Developed Python scripts to process thousands of daily bank transactions and reports.</div>
                </div>
            </div>
        </main>
    )
}