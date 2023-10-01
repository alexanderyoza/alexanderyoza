import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';

export default function Uhfd() {
    return (
        <div className='container'>
            <div className={styles.projectInfo}>
                <h2>
                    Union Hills Family Dentistry
                </h2>
                <div className={styles.projectLine}></div>
                <div className={styles.bottomTitle}>
                    <div className={styles.projectSkills}>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/javascript.png' alt='javascript' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                    </div>  
                    <div className={styles.date}>
                        August 2023
                    </div>  
                </div>
            </div>
            <div className={styles.gallery}>
                <h2>
                    Gallery
                </h2>
                <div className={styles.projectImageContainer}>
                    <Image src='/projects/uhfd/landing.png' alt='union hills family dentistry landing' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectImageContainer}>
                    <Image src='/projects/uhfd/services.png' alt='union hills family dentistry services' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectImageContainer}>
                    <Image src='/projects/uhfd/appointment.png' alt='union hills family dentistry appointment' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
            </div>
        </div>
    )
}