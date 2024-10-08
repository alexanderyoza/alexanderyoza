import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';

export default function SDSC() {
    return (
        <main className='container'>
            <div className={styles.top}>
                <div className={styles.workImageContainer}>
                    <Image src='/work/sdsc.jpeg' alt='san diego supercomputer logo' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                </div>
                <div className={styles.date}>
                    June 2024 - August 2024
                </div>
            </div>
            <div className={styles.experienceImageContainer}>
                <Image src='/work/sdsc-work.png' alt='sdsc sample' fill={true} sizes="(max-width: 300px) 300px" className={styles.experienceImage}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>
                        <div className={styles.company}>
                            San Diego Supercomputer Center
                        </div>
                        <div className={styles.position}>
                            SDSC Developer Intern
                        </div>
                    </div>
                    <div className={styles.location}>
                        San Diego, California
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        Assumed a leadership role in planning and creating a full-stack web application project.
                    </div>
                    <div>
                        Enhanced team performance through the application of agile software engineering principles.
                    </div>
                    <div>
                        Utilized React.js, Node.js, and Google Firebase to develop a web platform that assists college students in discovering college age-centered locations.
                    </div>
                </div>
            </div>
        </main>
    )
}