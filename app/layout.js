import { Inter } from 'next/font/google'
import '../styles/globals.css';
import Navigate from '../components/Navigate';
import Footer from '../components/Footer';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata = {
    title: 'Alex Yoza — Software Engineer',
    description: 'Alex Yoza — Associate Software Engineer at Capital One, founder of Nisatsu, co-founder of Ponzu. Core modernization, common capability and tooling, AI workflows, and products built end-to-end.',
    metadataBase: new URL('https://alexyoza.com'),
    openGraph: {
        title: 'Alex Yoza — Software Engineer',
        description: 'Core modernization, common capability and tooling, AI workflows, and products built end-to-end.',
        url: 'https://alexyoza.com',
        siteName: 'Alex Yoza',
        type: 'website',
    },
}

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F5F5F3' },
        { media: '(prefers-color-scheme: dark)', color: '#0D0E11' },
    ],
}

// Applies the stored theme before first paint (no flash of the wrong theme).
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className={inter.className}>
                <Navigate />
                {children}
                <Footer />
            </body>
        </html>
    )
}
