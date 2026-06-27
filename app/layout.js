import { Inter } from 'next/font/google'
import '../styles/globals.css';
import Navigate from '../components/Navigate';
import Footer from '../components/Footer';

const inter = Inter({ variable: '--font-inter',subsets: ['latin'] })

export const metadata = {
    title: 'Alex Yoza — Software Engineer',
    description: 'Alex Yoza — Associate Software Engineer at Capital One, founder of Nisatsu, co-founder of Ponzu. Observability, AI workflows, and products built end-to-end.',
    metadataBase: new URL('https://alexyoza.com'),
    openGraph: {
        title: 'Alex Yoza — Software Engineer',
        description: 'Observability, AI workflows, and products built end-to-end.',
        url: 'https://alexyoza.com',
        siteName: 'Alex Yoza',
        type: 'website',
    },
}

export const viewport = {
    themeColor: '#08090C',
    colorScheme: 'dark',
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
