import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '@/components/MainLayout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  const [loading, setLoading] = useState(false)


  useState(() => {
      setTimeout(() => {
          setLoading(!loading)
      }, 3000);
  }, [])

  if (loading)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp;