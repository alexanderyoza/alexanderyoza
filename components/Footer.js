
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/footer.module.css';
import Image from 'next/image';

function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <div className={styles.logoImage}>
                        <Image src='/logo.png' fill={true} sizes="(max-width: 200px) 200px"/>
                    </div>
                    <div className={styles.logoText}>
                        Alex Yoza
                    </div>
                </div>
                <nav>
                    <h2>
                        Links
                    </h2>
                    <Link href='/' className={styles.link}>About</Link>
                    <Link href='/work' className={styles.link}>Experience</Link>
                    <Link href='/projects' className={styles.link}>Projects</Link>
                    <Link href='/contact' className={styles.link}>Contact</Link>
                </nav>
                <div className={styles.contacts}>
                    <h2>
                        Contact
                    </h2>
                    <a href="mailto:alex.yoza@gmail.com">alex.yoza@gmail.com</a>
                    <a href="tel:6233992062">(623)399-2062</a>
                    <a href="https://www.linkedin.com/in/alex-yoza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className={styles.copyright}>
                © 2025 Alex Yoza. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer