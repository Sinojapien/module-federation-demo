import React from "react";
import "@module-federation/nextjs-mf/src/include-defaults";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
