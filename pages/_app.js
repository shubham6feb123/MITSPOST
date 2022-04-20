import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(20);
      // console.log("routerchange start");
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
      // console.log("routerchange end");
    });
  }, [router.query]);
  console.log("will load every time", router);
  return (
    <ChakraProvider>
      <LoadingBar
        color="#0f730ccc"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => {
          setProgress(0);
          console.log("loaderFinished");
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
