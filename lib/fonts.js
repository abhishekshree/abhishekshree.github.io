import { Inconsolata, JetBrains_Mono, Bree_Serif } from 'next/font/google'

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const breeSerif = Bree_Serif({
  subsets: ['latin'],
  variable: '--font-bree',
  display: 'swap',
  weight: ['400'],
})
