import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';

export default function Freelance() {
    return (
        <main className='container'>
            <div className={styles.top}>
                <div className={styles.workImageContainer}>
                    <Image src='/logo.png' alt='freelance logo' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                </div>
                <div className={styles.date}>
                    June 2023 - Present
                </div>
            </div>
            <div className={styles.experienceImageContainer}>
                <Image src='/work/freelance-work.png' alt='freelance sample' fill={true} sizes="(max-width: 300px) 300px" className={styles.experienceImage}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>
                        <div className={styles.company}>
                            AGY LLC
                        </div>
                        <div className={styles.position}>
                            Web Developer and Consultant (Self-Employed)
                        </div>
                    </div>
                    <div className={styles.location}>
                        Phoenix, Arizona
                    </div>
                </div>
                <div className={styles.description}>
                    <div>Reinforced communication skills in order to understand the goals of the clients’ business.</div>
                    <div>Researched design techniques to grab attention and create simple yet effective website designs.</div>
                    <div>
                        Developed my understanding of various website testing techniques to enhance the consistency and
                        reliability of websites, ensuring an optimal user experience and minimizing potential errors.
                    </div>
                </div>
            </div>
        </main>
    )
}