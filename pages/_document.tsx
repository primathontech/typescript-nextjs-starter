import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    referrer() {
        console.log('Log From MyDocument');

        return (
            <Html>
                <Head>
                    <meta property='title' content='Primathon' />
                    <meta property='author' content='Ramvishvas Kumar' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
