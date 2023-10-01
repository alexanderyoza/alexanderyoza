import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';

export default function StockAnalysis() {
    return (
        <div className='container'>
            <div className={styles.projectInfo}>
                <h2>
                    Stock Market Analysis
                </h2>
                <div className={styles.projectLine}></div>
                <div className={styles.bottomTitle}>
                    <div className={styles.projectSkills}>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/python.png' alt='python' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                    </div>  
                    <div className={styles.date}>
                        January 2023
                    </div>  
                </div>
            </div>
            <div className={styles.description}>
                Employs Polygon's stock market data api to analyze the effectiveness of moving averages, a popular indicator, to make trading decisions.
                Tests several different timeframes to find the most profitable moving average strategy.
            </div>
        </div>
    )
}