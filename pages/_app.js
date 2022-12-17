import '../styles/globals.css'
import Script from "next/script";
import { Manrope } from '@next/font/google'


const manrope = Manrope({
  subsets: ['latin'],
});


function MyApp({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <Script 
        strategy='lazyOload' 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload' id='1'>
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
               page_path: window.location.pathname,
             });  
        `}
      </Script>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
