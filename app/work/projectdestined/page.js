import React from 'react'
import styles from '../../../styles/work.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';

export default function ProjectDestined() {
    return (
        <main className='container'>
            <div className={styles.top}>
                <div className={styles.workImageContainer}>
                    <Image src='/work/project-destined.png' alt='project destined logo' fill={true} sizes="(max-width: 300px) 300px" className={styles.workImage}/>
                </div>
                <div className={styles.date}>
                    September 2022 - December 2022
                </div>
            </div>
            <div className={styles.experienceImageContainer}>
                <Image src='/work/project-destined-work.jpeg' alt='project destined sample' fill={true} sizes="(max-width: 300px) 300px" className={styles.experienceImage}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <div>
                        <div className={styles.company}>
                            Project Destined
                        </div>
                        <div className={styles.position}>
                            Commercial Real Estate Intern
                        </div>
                    </div>
                    <div className={styles.location}>
                        Remote
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        Worked with professionals at Marcus and Millichap Vancouver to build 10-year cash flow projections
                        and sensitivity analysis based on various growth rates, hold periods, and exit cap rates.
                    </div>
                    <div>
                        Received 60+ hours of training on real estate fundamentals, property valuation, deal financing,
                        financial modeling, and market research.
                    </div>
                    <div>
                        Prepared and presented investment memos to real estate professionals from private equity,
                        brokerages, investment banks, and other real estate firms.
                    </div>
                </div>
            </div>
        </main>
    )
}