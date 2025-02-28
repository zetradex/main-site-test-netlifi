import { useRouter } from "next/router";
import en from "public/locales/main-page/forex-racing-cup/en";
import indonesia from "public/locales/main-page/forex-racing-cup/indonesia";
import ru from "public/locales/main-page/forex-racing-cup/ru";
import ind from "public/locales/main-page/forex-racing-cup/in";
import cn from "public/locales/main-page/forex-racing-cup/cn";
import tw from "public/locales/main-page/forex-racing-cup/tw";
import vn from "public/locales/main-page/forex-racing-cup/vn";
import th from "public/locales/main-page/forex-racing-cup/th";
import es from "public/locales/main-page/forex-racing-cup/es";
import pt from "public/locales/main-page/forex-racing-cup/pt";
import jp from "public/locales/main-page/forex-racing-cup/jp";
import it from "public/locales/main-page/forex-racing-cup/it";
import uz from "public/locales/main-page/forex-racing-cup/uz";
import pk from "public/locales/main-page/forex-racing-cup/pk";
import banner from "public/images/main-forex-recing-cup/banner.png";
import { getTranslations } from "common/utils/getTranslations";
import Image from "next/image";
import Link from "next/link";
import cls from "./ForexRacingCup.module.scss";

const ForexRacingCup = () => {
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
    <div className="ForexRacingCup__container">
      <div className={cls.ForexRacingCup}>
        <div className={cls.ForexRacingCup_left}>
          <div className={cls.ForexRacingCup_title}>
            <h2>{t.ForexRacingCup}</h2>
          </div>
          <div className={cls.ForexRacingCup_subtitle}>
            <h3>{t.StartYour}</h3>
          </div>
          <div className={cls.ForexRacingCup_desc}>
            <p>{t.TheForexMotors}</p>
          </div>
          <div className={cls.ForexRacingCup_btn}>
            <Link href="/forex-racing-cup">{t.LearnMore}</Link>
          </div>
        </div>
        <div className={cls.ForexRacingCup_right}>
          <div className={cls.ForexRacingCup_image}>
            <Image src={banner} alt="banner" width={761} height={396} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexRacingCup;
