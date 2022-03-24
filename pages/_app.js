import AppContext from '../context/state';
import { useRouter } from 'next/router';
import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
const router = useRouter()
  return (
    <AppContext.Provider
      value={{
        page: router.pathname,
      }}>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;