import "./globals.css";
import "../index.css";
import "../prime.css";
import "../global.scss";
import "../App.css";
import "aos/dist/aos.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Providers } from '../providers';

export const metadata = {
  // title: "Business Management Software, ERP system, CRM & Project Management in One",
  // description: "All-in-one business management software and ERP software for Australian SMEs, with built-in CRM and project management tools.",
  verification: {
    google: "-21MMiNg4HsiFdG-kiteNfjPiSWjpEzqgep8REsCJus"
  },
  other: {
    'msvalidate.01': '2B695D648C28EFB5F1925AACCC8043B3'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              requestIdleCallback(() => {
                const ga = document.createElement("script");
                ga.src = "https://www.googletagmanager.com/gtag/js?id=G-GTVNNDD15Z";
                ga.async = true;
                document.head.appendChild(ga);

                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag("js", new Date());
                gtag("config", "G-GTVNNDD15Z");
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              requestIdleCallback(() => {
                (function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                  var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
                })(window, document, "script", "dataLayer", "GTM-PX86X4XP");
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              requestIdleCallback(() => {
                const jotScript = document.createElement("script");
                jotScript.src =
                  "https://cdn.jotfor.ms/agent/embedjs/01975471ce517020b33b83343ee6c3d6fcc7/embed.js?skipWelcome=1&maximizable=1";
                document.body.appendChild(jotScript);
              });
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PX86X4XP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
