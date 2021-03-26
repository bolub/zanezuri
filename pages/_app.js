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
      </Head>
      <ChakraProvider theme={customTheme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
