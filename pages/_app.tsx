import "styles/global.scss";
import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import LoadingSpinner from "../common/components/LoadingSpinner/LoadingSpinner";
import {CountryProvider} from "common/provider/CountryProvider";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedLanguage = Cookies.get("locale");
    const browserLanguage = navigator.language;
    const initialize = async () => {
      if (storedLanguage && storedLanguage !== browserLanguage) {
        const hasQueryParams = router.asPath.includes("?");
        const queryParam =
          router.query.x && !hasQueryParams ? `?x=${router.query.x}` : "";
        //const queryParam = router.query.x ? `?x=${router.query.x}` : '';
        const newPath = `/${storedLanguage}${router.asPath}${queryParam}`;
        console.log(router.asPath, "router.asPath");
        if (router.asPath !== newPath) {
          await router.push(newPath, newPath, { locale: false });
        }
      }
      setIsInitialized(true);
    };
    initialize();
  }, []);

  useEffect(() => {
    if (router.query.x) {
      Cookies.set("x", router.query.x as string, { expires: 365 });
    }
  }, [router.query.x]);
  useEffect(() => {
    if (router.query.leadSource) {
      Cookies.set("leadSource", router.query.leadSource as string, {
        expires: 7,
      });
    }
  }, [router.query.leadSource]);

  useEffect(() => {
    window.fetch(window.location.href).then((response) => {
      const countryCode = response.headers.get("X-CountryCode");

      Cookies.set("countryCode", countryCode as string, { expires: 7 });
    });
  }, []);

  if (!isInitialized) {
    return <LoadingSpinner />;
  } else {
    return (
        <CountryProvider>
          <div id="modal" style={{ position: "relative", zIndex: 2 }} />
          <main className="wrapper">
              <Component {...pageProps} />
          </main>
        </CountryProvider>
    );
  }
}
