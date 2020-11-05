// import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "theme-ui";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
