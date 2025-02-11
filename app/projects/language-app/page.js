import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function LanguageApp() {
    return (
        <div className='container'>
            <div className={styles.projectInfo}>
                <h2>
                    Flashcard Mobile App
                </h2>
                <div className={styles.projectLine}></div>
                <div className={styles.bottomTitle}>
                    <div className={styles.projectSkills}>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
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
                <div className={styles.projectGalleryImages}>
                    <div className={styles.projectImageContainerTall}>
                        <Image src='/projects/language-app/home.png' alt='language app home' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImageTall}/>
                    </div>
                    <div className={styles.projectImageContainerTall}>
                        <Image src='/projects/language-app/set.png' alt='language app set' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImageTall}/>
                    </div>
                    <div className={styles.projectImageContainerTall}>
                        <Image src='/projects/language-app/english.png' alt='language app english side' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImageTall}/>
                    </div>
                    <div className={styles.projectImageContainerTall}>
                        <Image src='/projects/language-app/japanese.png' alt='language app japanese side' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImageTall}/>
                    </div>
                </div>
            </div>
            <Link href='/projects' className={styles.back}>Go Back</Link>
        </div>
    )
}