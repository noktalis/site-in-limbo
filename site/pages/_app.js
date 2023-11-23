/**
 * Followed from:
 * https://nextjs.org/learn-pages-router/basics/assets-metadata-css/global-styles
 * 
 * This file exists to apply global.css across the app
 */

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}