import Link from 'next/link';
import { Inter } from '@next/font/google'
import '../styles/globals.css';
import Navigate from '../components/Navigate';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Alex Yoza Portfolio',
    description: 'Portfolio Website that offers information on academic, work, and project history',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <main className={inter.className}>
                    <Navigate />
                    {children}
                </main>
            </body>
        </html>
    )
}
