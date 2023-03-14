import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '@/components/MainLayout';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp;