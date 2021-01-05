import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
    console.log('Log From MyApp');
    return <Component {...pageProps} />;
}

export default MyApp;
