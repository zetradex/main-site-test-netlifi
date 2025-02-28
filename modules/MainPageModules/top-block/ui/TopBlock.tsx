import { useRouter } from "next/router";
import en from "public/locales/main-page/top-block/en";
import es from "public/locales/main-page/top-block/es";
import pt from "public/locales/main-page/top-block/pt";
import ru from "public/locales/main-page/top-block/ru";
import indonesia from "public/locales/main-page/top-block/indonesia";
import ind from "public/locales/main-page/top-block/in";
import cn from "public/locales/main-page/top-block/cn";
import tw from "public/locales/main-page/top-block/tw";
import vn from "public/locales/main-page/top-block/vn";
import th from "public/locales/main-page/top-block/th";
import jp from "public/locales/main-page/top-block/jp";
import it from "public/locales/main-page/top-block/it";
import uz from "public/locales/main-page/top-block/uz";
import pk from "public/locales/main-page/top-block/pk";
import { memo, useEffect, useState } from "react";
import { getTranslations } from "common/utils/getTranslations";
import { NanoLot } from "modules/MainPageModules/top-block/ui/NanoLot/NanoLot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type Settings } from "react-slick";
import { BeBold } from "modules/MainPageModules/top-block/ui/BeBold/BeBold";
import { WelcomeBonus } from "modules/MainPageModules/top-block/ui/WelcomeBonus/WelcomeBonus";
import { BeBoldMobile } from "modules/MainPageModules/top-block/ui/BeBold/BeBoldMobile/BeBoldMobile";
import { WelcomeBonusMobile } from "modules/MainPageModules/top-block/ui/WelcomeBonus/WelcomeBonusMobile/WelcomeBonusMobile";
import { NanoLotMobile } from "modules/MainPageModules/top-block/ui/NanoLot/NanoLotMobile/NanoLotMobile";
import { NewEra } from "modules/MainPageModules/top-block/ui/NewEra/NewEra";
import { NewEraMobile } from "modules/MainPageModules/top-block/ui/NewEra/NewEraMobile/NewEraMobile";
import cls from "./TopBlock.module.scss";

const MAX_WIDTH = 1024;

const TopBlock = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= MAX_WIDTH);
  const { locale } = useRouter();

  const settings: Settings = {
    dots: isDesktop,
    dotsClass: `slick-dots ${cls.DotsClass}`,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const localizations = {
    en,
    ru,
    indonesia,
    ind,
    cn,
    tw,
    vn,
    th,
    es,
    pt,
    jp,
    it,
    uz,
    pk,
  };

  const t = getTranslations(localizations, locale);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= MAX_WIDTH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [MAX_WIDTH]);

  const href = "/chinese-new-year-bonus";

  return (
    <div className={cls.TopBlock}>
      {isDesktop ? (
        <Slider {...settings}>
          {/*<ChineseNewYearBonus href={href} t={t} />*/}
          <BeBold t={t} />
          <WelcomeBonus t={t} />
          <NanoLot t={t} />
          <NewEra t={t} />
        </Slider>
      ) : (
        <Slider {...settings}>
          {/*<ChineseNewYearBonusMobile href={href} t={t} />*/}
          <BeBoldMobile t={t} />
          <WelcomeBonusMobile t={t} />
          <NanoLotMobile t={t} />
          <NewEraMobile t={t} />
        </Slider>
      )}
    </div>
  );
};

export default memo(TopBlock);
