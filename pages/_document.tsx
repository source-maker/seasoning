import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../styles/initAppTheme';
import { createEmotionCache } from '@/lib/emotion';

// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
  render() {
    // TODO: configure head settings for your project
    const metaUrl = 'https://broth.ninja';
    const metaDescription = 'Broth | A Next.js MUI starter kit';
    const googleTagManagerUrl = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`;

    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="description" content={metaDescription} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${metaUrl}/`} />
          <meta property="og:title" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={`${metaUrl}/ogp.png`} />

          {/*Twitter*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`${metaUrl}/`} />
          <meta property="twitter:title" content={metaDescription} />
          <meta property="twitter:description" content={metaDescription} />
          <meta property="twitter:image" content={`${metaUrl}/ogp.png`} />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="${googleTagManagerUrl}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: any // eslint-disable-line @typescript-eslint/no-explicit-any
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
