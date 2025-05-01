
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                try {
                  dataLayer.push(arguments);
                } catch (e) {
                  console.debug('Analytics blocked or failed to load');
                }
              }
              gtag('js', new Date());
              gtag('config', 'G-C33Y4WJML3', {
                send_page_view: false,
                transport_url: window.location.protocol + '//www.google-analytics.com'
              });
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C33Y4WJML3"
          onError={(e) => {
            console.debug('Analytics script failed to load');
            e.preventDefault();
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
