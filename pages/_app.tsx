import type { AppProps } from "next/app";
import "../styles/Global.css";
import "../config/tailwind/main.css";
import "../config/tailwind/chrome-bug.css";
import { reduxStore } from "../config/redux-store";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

import AppLoaderProvider from "../contexts/AppLoaderContext";
import AppErrorModalProvider from "../contexts/AppErrorModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={reduxStore}>
      <AppErrorModalProvider>
        <AppLoaderProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AppLoaderProvider>
      </AppErrorModalProvider>
    </ReduxProvider>
  );
}

export default MyApp;
