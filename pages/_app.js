import {Analytics} from '@vercel/analytics/react';
import Script from 'next/script'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics/>
        </>
    );
}

export default MyApp;