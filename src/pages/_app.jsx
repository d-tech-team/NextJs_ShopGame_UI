import React from "react";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "@/components/MainLayout";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  // const Layout = Component.Layout || MainLayout;

  return (
    <SSRProvider>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </SSRProvider>
  );
}

export default MyApp;
