
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/footer.module.css';
import Logo from './Logo';

function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <span className={styles.logoImage}>
                        <Logo size={34} />
                    </span>
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
                    <a href="https://www.linkedin.com/in/alex-yoza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/alexanderyoza?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <div className={styles.copyright}>
                © 2026 Alex Yoza. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer