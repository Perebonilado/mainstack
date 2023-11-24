import type { AppProps } from "next/app";
import "../config/tailwind/main.css";
import "../config/tailwind/chrome-bug.css";
import { reduxStore } from "../config/redux-store";
import { Provider as ReduxProvider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={reduxStore}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
