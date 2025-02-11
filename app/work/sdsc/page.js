import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

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
                        <span>•</span>
                        Assumed a leadership role in the planning and developing of a full-stack web application, driving project direction and team collaboration.
                    </div>
                    <div>
                        <span>•</span>
                        Improved team efficiency by applying agile development practices, ensuring a smooth workflow.
                    </div>
                    <div>
                        <span>•</span>
                        Built a web platform using React.js, Node.js, and Google Firebase to help college students discover age-appropriate locations, integrating seamless functionality and a user-friendly interface.
                    </div>
                </div>
            </div>
            <Link href='/work' className={styles.back}>Go Back</Link>
        </main>
    )
}