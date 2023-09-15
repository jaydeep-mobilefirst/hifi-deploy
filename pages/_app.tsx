import "../styles/global.css";
import "../styles/core.css";
import "../styles/main.css";
import "../styles/hifipay.css";
import "../styles/about.css";
import "../styles/careers.css";
import "../styles/blog.css";
import "../styles/extra.css";
import "../styles/slideshow.css";
import "../node_modules/flickity/css/flickity.css";
import "../styles/auth.css"
import Script from 'next/script';
import { useEffect, useState } from 'react';
import type { AppProps } from "next/app";
import 'tailwindcss/tailwind.css'

declare let ga: Function;

export default function App({ Component, pageProps }: AppProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {

    const script = document.createElement('script');
    script.src = '//fw-cdn.com/10803668/3585004.js';
    script.setAttribute('chat', 'true');
    document.head.appendChild(script);

    const links = Array.from(document.getElementsByClassName('gtm'));

    links.forEach((link: any) => {
      link.addEventListener('click', (e: Event) => {
        const className = (e.target as HTMLElement).className;
        const parts = className.split('_');
        const uniqueTag = parts[1];

        ga('send', 'event', 'Navigation', 'click', uniqueTag);
      });
    });

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  // useEffect(() => {
  //   let script = document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@0.9.436/build/spline-viewer.js"]') as HTMLScriptElement;
  //   if (!script) {
  //     script = document.createElement('script') as HTMLScriptElement;
  //     script.type = 'module';
  //     script.src = 'https://unpkg.com/@splinetool/viewer@0.9.436/build/spline-viewer.js';
  //     document.head.appendChild(script);
  //   } else {
  //     setScriptLoaded(true);
  //   }
  // }, []);

  return (
    <div className="root">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_MEASUREMENT_ID');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
