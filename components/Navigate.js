'use client'

import React from 'react';
import Link from 'next/link';
import styles from '../styles/navigate.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Navigate() {

    const pathname = usePathname();

    return (
        <header className={styles.navigation}>
            <div className={styles.container} >
                <div className={styles.logo}>
                    <Image src='/logo.png' fill={true} sizes="(max-width: 200px) 10vh"/>
                </div>
                <nav className={styles.navOptions}>
                    <Link href='/' className={styles.link}><div className={pathname === '/' ? styles.active : styles.inactive}>About</div></Link>
                    <Link href='/projects' className={styles.link}><div  className={pathname === '/projects' ? styles.active : styles.inactive}>Projects</div></Link>
                    <Link href='/contact' className={styles.link}><div className={pathname === '/contact' ? styles.active : styles.inactive}>Contact</div></Link>
                </nav>
            </div>
        </header>
    );
}

export default Navigate