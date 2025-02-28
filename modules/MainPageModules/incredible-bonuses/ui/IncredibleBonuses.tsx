import style from "modules/MainPageModules/incredible-bonuses/ui/IncredibleBonuses.module.scss";
import Image from "next/image";
import attencionIcon from "public/images/incredible-bonuses/attentionIcon.webp";
import { useRouter } from "next/router";
import en from "public/locales/main-page/incredible-bonuses/en";
import ru from "public/locales/main-page/incredible-bonuses/ru";
import indonesia from "public/locales/main-page/incredible-bonuses/indonesia";
import ind from "public/locales/main-page/incredible-bonuses/in";
import cn from "public/locales/main-page/incredible-bonuses/cn";
import tw from "public/locales/main-page/incredible-bonuses/tw";
import vn from "public/locales/main-page/incredible-bonuses/vn";
import th from "public/locales/main-page/incredible-bonuses/th";
import es from "public/locales/main-page/incredible-bonuses/es";
import pt from "public/locales/main-page/incredible-bonuses/pt";
import jp from "public/locales/main-page/incredible-bonuses/jp";
import it from "public/locales/main-page/incredible-bonuses/it";
import uz from "public/locales/main-page/incredible-bonuses/uz";
import pk from "public/locales/main-page/incredible-bonuses/pk";
import { BonusesCards } from "./cards-block/BonusesCards";
import { memo } from "react";
import { getTranslations } from "common/utils/getTranslations";

const IncredibleBonuses = () => {
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
    <div className={style.block}>
      <div className="IncredibleBonuses__container">
        <div className={style.text__block}>
          <h2 className={style.text__block_header}>{t.IncredibleBonuses}</h2>
          <div className={style.description__block}>
            <p className={style.description__block_item}>{t.BonusesWill}</p>
            <div className={style.description__block_item_box}>
              <Image
                className={style.description__block_item_image}
                src={attencionIcon}
                alt="attencion icon"
                width={24}
                height={24}
                loading={"lazy"}
              />
              <p className={style.description__block_item}>{t.ItShould}</p>
            </div>
          </div>
        </div>
        <BonusesCards t={t} />
      </div>
    </div>
  );
};

export default memo(IncredibleBonuses);
