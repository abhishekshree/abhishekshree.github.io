import '@/css/tailwind.css'
import { Inconsolata, JetBrains_Mono, Bree_Serif } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProviderClient'
import LayoutWrapper from '@/components/LayoutWrapper'
import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale || 'en_US',
    site_name: siteMetadata.title,
    images: [{ url: siteMetadata.socialBanner }],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteMetadata.twitter,
    images: [{ url: siteMetadata.socialBanner }],
  },
}

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const breeSerif = Bree_Serif({
  subsets: ['latin'],
  variable: '--font-bree',
  display: 'swap',
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inconsolata.variable} ${breeSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="google-site-verification" content="vKSVHMcjB0UHqDlUClBt58EHAMSlGsOLJTtR-Eoj_Wk" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/index.xml" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Main-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Math-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Size2-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/fonts/KaTeX_Size4-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css" integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j" crossOrigin="anonymous" />
        <Script data-goatcounter="https://shree.goatcounter.com/count" async src="//gc.zgo.at/count.js" strategy="afterInteractive" />
        <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="abhishekshree" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18" strategy="afterInteractive" />
      </head>
      <body className="antialiased text-black bg-white dark:bg-neutral-900 dark:text-white">
        <ThemeProvider attribute="class">
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}