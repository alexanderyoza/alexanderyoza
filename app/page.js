import styles from '../styles/page.module.css'
import '../styles/globals.css';
import Image from 'next/image';

export default function Home() {
    return (
        <section className='container'>
            <div className={styles.introduction}>
                <div className={styles.introText}>
                    <h1>
                        Hello, I'm Alex Yoza.
                    </h1>
                    <h2>
                        Welcome to my portfolio.
                    </h2>
                </div>
                <div className={styles.introImage}>
                    <Image src='/portrait.png' alt='portrait' fill={true} sizes="(max-width: 800px) 800px"/>
                </div>
            </div>
            <div className={styles.skills}>
                <div className={styles.skillImage}>
                    <Image src='/skills/java.png' alt='java' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/cpp.png' alt='cpp' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/c.png' alt='c' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/python.png' alt='python' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/javascript.png' alt='javscript' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/react.png' alt='react' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/next.png' alt='next' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/firebase.png' alt='firebase' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/node.png' alt='node' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/mongo.png' alt='mongo' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/git.png' alt='git' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
                <div className={styles.skillImage}>
                    <Image src='/skills/github.png' alt='github' fill={true} sizes="(max-width: 100px) 100px"/>
                </div>
            </div>
            <div className={styles.scroll}>
                ⌄
            </div>
        </section>
    )
}
