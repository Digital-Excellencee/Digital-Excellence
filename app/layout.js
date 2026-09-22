import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Digital Excellence | Full-Service Digital Marketing Agency',
  description: 'India ki sabse powerful digital marketing agency. Website, SEO, Social Media, Branding, Ads, Video — ek agency, infinite growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7N9MJ9FB39"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7N9MJ9FB39');
        `}
      </Script>
    </html>
  )
}
