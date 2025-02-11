import React from 'react'
import styles from '../../styles/projects.module.css';
import '../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

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
                        <div className={styles.projectSkills}>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <Link href='/projects/uhfd' className={styles.learnMore}>
                            Learn More
                        </Link>
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
                        <div className={styles.projectSkills}>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/svelte.png' alt='svelte' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <Link href='/projects/gsfhi' className={styles.learnMore}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.project}>
                <div className={styles.projectBackground}>
                    <Image src='/projects/racctracc/cover.png' alt='racctracc' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectContent}>
                    <div className={styles.projectInfo}>
                        <h2>
                            RaccTracc
                        </h2>
                        <div className={styles.projectLine}></div>
                        <div className={styles.projectSkills}>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/mongo.png' alt='mongodb' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <Link href='/projects/racctracc' className={styles.learnMore}>
                            Learn More
                        </Link>
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
                            Flashcard React Native Mobile App
                        </h2>
                        <div className={styles.projectLine}></div>
                        <div className={styles.projectSkills}>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <Link href='/projects/language-app' className={styles.learnMore}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.project}>
                <div className={styles.projectBackground}>
                    <Image src='/projects/stockapi/stockapi-cover.png' alt='stock market api analysis' fill={true} sizes="(max-width: 300px) 300px" className={styles.projectImage}/>
                </div>
                <div className={styles.projectContentLight}>
                    <div className={styles.projectInfo}>
                        <h2>
                            Stock Market Analysis
                        </h2>
                        <div className={styles.projectLine}></div>
                        <div className={styles.projectSkills}>
                            <div className={styles.imageContainer}>
                                <Image src='/skills/python.png' alt='python' fill={true} sizes="(max-width: 300px) 300px" className={styles.skillImage}/>
                            </div>
                        </div>
                        <Link href='/projects/stock-analysis' className={styles.learnMore}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
            
        </main>
    )
}
