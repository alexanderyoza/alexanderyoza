'use client'

import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/navigate.module.css';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

function Navigate() {

    const pathname = usePathname();

    return (
        <header className={styles.navigation}>
            <div className={styles.container} >
                <Link href='/' className={styles.logo} aria-label="Home">
                    <Logo size={30} />
                </Link>
                <nav className={styles.navOptions}>
                    <Link href='/' className={styles.link}><div className={pathname === '/' ? styles.active : styles.inactive}>About</div></Link>
                    <Link href='/work' className={styles.link}><div className={pathname.includes('/work') || pathname.includes('/projects') ? styles.active : styles.inactive}>Experience</div></Link>
                    <Link href='/contact' className={styles.link}><div className={pathname === '/contact' ? styles.active : styles.inactive}>Contact</div></Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

export default Navigate