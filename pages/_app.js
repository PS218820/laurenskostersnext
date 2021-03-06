// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from "../comps/Layout";
import Head from "next/head";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
  return (

      <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  )
}

export default MyApp
