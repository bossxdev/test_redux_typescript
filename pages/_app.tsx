import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore();

  return (
    <>
      <PersistGate persistor={store.__persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
