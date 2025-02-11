import React from 'react'
import styles from '../../../styles/projectInfo.module.css';
import '../../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Gsfhi() {
    return (
        <div className='container'>
            <div className={styles.projectInfo}>
                <h2>
                    GSF LLC - Housing Development Company Website
                </h2>
                <div className={styles.projectLine}></div>
                <div className={styles.bottomTitle}>
                    <div className={styles.projectSkills}>
                        <div className={styles.imageContainer}>
                            <Image src='/skills/svelte.png' alt='svelte' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                        </div>
                    </div>  
                    <div className={styles.date}>
                        December 2024
                    </div>  
                </div>
            </div>
            <div className={styles.gallery}>
                <h2>
                    Gallery
                </h2>
                <div className={styles.projectGalleryImages}>
                   <div className={styles.projectImageContainer}>
                        <Image src='/projects/gsfhi/landing.png' alt='gsfhi landing' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                    </div>
                    <div className={styles.projectImageContainer}>
                        <Image src='/projects/gsfhi/about.png' alt='gsfhi about' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                    </div>
                    <div className={styles.projectImageContainer}>
                        <Image src='/projects/gsfhi/projects.png' alt='gsfhi projects' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                    </div> 
                </div>
                
            </div>

            <Link href='/projects' className={styles.back}>Go Back</Link>
        </div>
    )
}