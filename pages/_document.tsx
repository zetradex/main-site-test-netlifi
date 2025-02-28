import Document, {Head, Html, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link
                        rel="icon"
                        href="/images/icons/favicon/favicon.svg"
                        type="image/ico"
                    />
                    <link
                        rel="apple-touch-icon"
                        href="/public/images/icons/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="preload"
                        href="/font/Gilroy-ExtraBold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/font/Gilroy-Medium.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/font/Gilroy-Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />

                    <link
                        rel="preload"
                        href="/font/Gilroy-SemiBold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <meta
                        property="og:title"
                        content="Leading Crypto CFD Forex investment platform | Zetradex"
                    />
                    <meta
                        property="og:description"
                        content="More than 600 trading instruments, including stocks, bonds, ETFs, cryptos, commodities, and Forex."
                    />
                    <meta property="og:image:type" content="image/jpeg"/>
                    <meta property="og:image:width" content="1200"/>
                    <meta property="og:image:height" content="630"/>
                    <meta property="og:image" content="/meta/opengraph-image.jpg"/>

                    <meta name="twitter:card" content="summary"/>
                    <meta
                        property="twitter:title"
                        content="Leading Crypto CFD Forex investment platform | Zetradex"
                    />
                    <meta
                        property="twitter:description"
                        content="More than 600 trading instruments, including stocks, bonds, ETFs, cryptos, commodities, and Forex."
                    />
                    <meta name="twitter:image:type" content="image/jpeg"/>
                    <meta name="twitter:image:width" content="1200"/>
                    <meta name="twitter:image:height" content="630"/>
                    <meta property="twitter:image" content="/meta/opengraph-image.jpg"/>


                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
