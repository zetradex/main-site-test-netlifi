import Head from "next/head";
import {TopBlock} from "modules/MainPageModules/top-block";
import {AboutZetradex} from "modules/MainPageModules/about-zetradex";
import {WhyChooseUs} from "modules/MainPageModules/why-choose-us";
import {ZetradexTradingAppAndPlatform} from "modules/MainPageModules/zetradex-trading-app-and-platform";
import {useRouter} from "next/router";
import {PartOfZeholding} from "modules/MainPageModules/part-of-zeholding";
import {ForexRacingCup} from "modules/MainPageModules/forex-racing-cup";

const HomePage = () => {
  const router = useRouter();



  return (
    <main>
      <Head>
        <title>Leading Crypto CFD Forex investment platform | Zetradex</title>
      </Head>
      <TopBlock />
      <AboutZetradex />
      <WhyChooseUs />
      <ForexRacingCup />
      <ZetradexTradingAppAndPlatform />
      <PartOfZeholding />
    </main>
  );
};

export default HomePage;
