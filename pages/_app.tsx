import type { AppProps } from "next/app";
import "../config/tailwind/main.css";
import "../config/tailwind/chrome-bug.css";
import { reduxStore } from "../config/redux-store";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppLoaderProvider from "../contexts/AppLoaderContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLoaderProvider>
      <ReduxProvider store={reduxStore}>
        <Component {...pageProps} />
        <ToastContainer />
      </ReduxProvider>
    </AppLoaderProvider>
  );
}

export default MyApp;
