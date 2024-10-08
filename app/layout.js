import { Inter } from 'next/font/google'
import '../styles/globals.css';
import Navigate from '../components/Navigate';
import Footer from '../components/Footer';

const inter = Inter({ variable: '--font-inter',subsets: ['latin'] })

export const metadata = {
    title: 'Alex Yoza Portfolio',
    description: 'Portfolio Website that offers information on academic, work, and project history',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigate />
                {children}
                <Footer />
            </body>
        </html>
    )
}
