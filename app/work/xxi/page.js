import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Xxi() {
    return (
        <main className='container'>
            <div className={styles.top}>
                <div className={styles.workImageContainer}>
                    <Image src='/work/xxi.JPG' alt='xxi logo' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                </div>
                <div className={styles.date}>
                    February 2021 - May 2021
                </div>
            </div>
            <div className={styles.experienceImageContainer}>
                <Image src='/work/xxi-work.jpg' alt='xxi sample' fill={true} sizes="(max-width: 300px) 300px" className={styles.experienceImage}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>
                        <div className={styles.company}>
                            Prom XXI
                        </div>
                        <div className={styles.position}>
                            Private Event Organizer
                        </div>
                    </div>
                    <div className={styles.location}>
                        Phoenix, Arizona
                    </div>
                </div>
                <div className={styles.description}>
                    <div>Privately fundraised and organized a high school prom for over 700 people.</div>
                    <div>
                        Worked in a team of three in order to effectively advertise on
                        social media, set up ticket payment options, and arrange accommodations including
                        the venue, a DJ, live performers, and decorations.
                    </div>
                    <div>Approximate Gross Revenue: $50,000</div>
                    
                </div>
            </div>
            <Link href='/work' className={styles.back}>Go Back</Link>
        </main>
    )
}