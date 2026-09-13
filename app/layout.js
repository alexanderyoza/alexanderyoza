import { Inter, Fraunces } from 'next/font/google'
import '../styles/globals.css';
import Navigate from '../components/Navigate';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-serif' })

export const metadata = {
    title: 'Alex Yoza | Software Engineer',
    description: 'I’m a software engineer at Capital One and the builder behind Nisatsu and Ponzu. I work on core modernization, AI workflows, and products built end to end.',
    metadataBase: new URL('https://alexyoza.com'),
    openGraph: {
        title: 'Alex Yoza | Software Engineer',
        description: 'I build AI workflows, scalable systems, and products people can actually use.',
        url: 'https://alexyoza.com',
        siteName: 'Alex Yoza',
        type: 'website',
    },
}

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#F5F5F5' },
        { media: '(prefers-color-scheme: dark)', color: '#141414' },
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
