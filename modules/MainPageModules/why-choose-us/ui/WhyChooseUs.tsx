import { memo } from "react";
import en from "public/locales/main-page/why-choose-us/en";
import ru from "public/locales/main-page/why-choose-us/ru";
import indonesia from "public/locales/main-page/why-choose-us/indonesia";
import ind from "public/locales/main-page/why-choose-us/in";
import cn from "public/locales/main-page/why-choose-us/cn";
import tw from "public/locales/main-page/why-choose-us/tw";
import vn from "public/locales/main-page/why-choose-us/vn";
import th from "public/locales/main-page/why-choose-us/th";
import es from "public/locales/main-page/why-choose-us/es";
import pt from "public/locales/main-page/why-choose-us/pt";
import jp from "public/locales/main-page/why-choose-us/jp";
import it from "public/locales/main-page/why-choose-us/it";
import uz from "public/locales/main-page/why-choose-us/uz";
import pk from "public/locales/main-page/why-choose-us/pk";
import { useRouter } from "next/router";
import { getTranslations } from "common/utils/getTranslations";

import { Trustpilot } from "modules/MainPageModules/why-choose-us/ui/trustpilot/Trustpilot";
import { CryptoTrading } from "modules/MainPageModules/why-choose-us/ui/cryptoTrading/CryptoTrading";
import { AwardWinning } from "modules/MainPageModules/why-choose-us/ui/awardWinning/AwardWinning";
import cls from "./WhyChooseUs.module.scss";

interface IWhyChooseUs {}

const WhyChooseUs = ({}: IWhyChooseUs) => {
  const { locale } = useRouter();

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

  return (
    <div className={`${cls.WhyChooseUs} __container`}>
      <div className={cls.WhyChooseUs_header}>
        <h2>{t.WhyChooseUs}</h2>
      </div>
      <div className={cls.WhyChooseUs_wrapper}>
        <Trustpilot />
        <CryptoTrading />
        <AwardWinning />
      </div>
    </div>
  );
};

export default memo(WhyChooseUs);
