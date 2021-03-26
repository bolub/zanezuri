// chakra
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Fonts } from "../chakra/Fonts";
// chakra
import { customTheme } from "../chakra/theme";

// global css
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zane and Zuri Oyediji</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
