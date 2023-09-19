import Link from 'next/link';
import '../styles/globals.css';
import styles from '../styles/layout.module.css';


export const metadata = {
    title: 'Alex Yoza Portfolio',
    description: 'Portfolio Website that offers information on academic, work, and project history',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>
                    <nav>
                        <Link href="/">
                            About Me
                        </Link>
                        <Link href="/projects">
                            Projects
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    )
}
