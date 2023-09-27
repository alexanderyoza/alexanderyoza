import React from 'react'
import styles from '../../styles/contact.module.css';
import '../../styles/globals.css';
import Image from 'next/image';

export default function Contact() {
    return (
        <main className={styles.container}>
            <div className={styles.contact}>
                <h1>
                    Contact Me
                </h1>
                <div className={styles.contactLinks}>
                    <a href='mailto:alex.yoza@gmail.com'>alex.yoza@gmail.com</a>
                    <a href='tel:6233992062'>(623)399-2062</a>
                    <a href='https://www.linkedin.com/in/alex-yoza/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href='https://github.com/alexanderyoza?tab=repositories' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    
                </div>
            </div>
        </main>
    )
}