import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

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
                            SitesByAlex
                        </div>
                        <div className={styles.position}>
                            Web Developer
                        </div>
                    </div>
                    <div className={styles.location}>
                        Phoenix, Arizona
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        <span>•</span>
                        Strengthened communication skills by effectively understanding and aligning with clients' business goals,
                        utilizing Firebase and Next.js to develop responsive and scalable solutions.
                    </div>
                        
                    <div> <span>•</span>Researched and applied design techniques to create visually engaging, simple, and effective website designs.</div>
                    <div>
                        <span>•</span>
                        Studied website testing methods to improve consistency and user experience while minimizing errors.
                    </div>
                </div>
            </div>
            <Link href='/work' className={styles.back}>Go Back</Link>
        </main>
    )
}