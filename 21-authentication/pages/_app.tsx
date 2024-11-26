import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
