import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
