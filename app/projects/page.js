import React from 'react'
import styles from '../../styles/projects.module.css';
import '../../styles/globals.css';
import Image from 'next/image';

export default function Projects() {
    return (
        <main className='container'>
            <section className={styles.project}>
                <div className={styles.projectBackground}>
                    <Image src='/projects/uhfd/landing.png' alt='union hills family dentistry' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectContent}>
                    <div className={styles.projectInfo}>
                        <h2>
                            Union Hills Family Dentistry
                        </h2>
                        <div className={styles.projectLine}></div>
                        <div className={styles.projectSkills5}>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/javascript.png' alt='javascript' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.project}>
                <div className={styles.projectBackground}>
                    <Image src='/projects/language-app/display.png' alt='language app' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectContent}>
                    <div className={styles.projectInfo}>
                        <h2>
                            Flashcard Mobile App
                        </h2>
                        <div className={styles.projectLine}></div>
                        <div className={styles.projectSkills5}>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/javascript.png' alt='javascript' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer5}>
                                <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.project}>
                <div className={styles.projectBackground}>
                    <Image src='/projects/gsfhi/landing.png' alt='gsf llc' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectContent}>
                    <div className={styles.projectInfo}>
                        <h2>
                            GSF LLC
                        </h2>
                        <div className={styles.projectLine}></div>
                        <div className={styles.projectSkills4}>
                            <div className={styles.imageContainer4}>
                                <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer4}>
                                <Image src='/skills/javascript.png' alt='javascript' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer4}>
                                <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer4}>
                                <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <div className={styles.learnMore}>
                            Learn More
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    )
}

//             Stock market api data
//             Air hockey game