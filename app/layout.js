import { Inter, Fraunces } from 'next/font/google'
import '../styles/globals.css';
import Navigate from '../components/Navigate';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-serif' })

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
        { media: '(prefers-color-scheme: light)', color: '#FBFAF7' },
        { media: '(prefers-color-scheme: dark)', color: '#14130F' },
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
            <body className={`${inter.variable} ${fraunces.variable}`}>
                <Navigate />
                {children}
                <Footer />
            </body>
        </html>
    )
}
