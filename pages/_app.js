import '@/styles/globals.css';
import Footer from './Portfolio/Footer';
import NavBar from './Portfolio/NavBar';

export default function App({ Component, pageProps }) {
  const shouldRenderNavbarAndFooter = Component.requireNavbarAndFooter;
  return (
    <>
      {/* {shouldRenderNavbarAndFooter && <NavBar />} */}
      <Component {...pageProps} />
      {/* {shouldRenderNavbarAndFooter && <Footer />} */}
    </>
  );
}
