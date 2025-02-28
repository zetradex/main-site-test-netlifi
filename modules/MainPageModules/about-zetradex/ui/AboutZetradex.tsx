import { useRouter } from "next/router";
import en from "public/locales/main-page/about-zetradex/en";
import indonesia from "public/locales/main-page/about-zetradex/indonesia";
import ru from "public/locales/main-page/about-zetradex/ru";
import ind from "public/locales/main-page/about-zetradex/in";
import cn from "public/locales/main-page/about-zetradex/cn";
import tw from "public/locales/main-page/about-zetradex/tw";
import vn from "public/locales/main-page/about-zetradex/vn";
import th from "public/locales/main-page/about-zetradex/th";
import es from "public/locales/main-page/about-zetradex/es";
import pt from "public/locales/main-page/about-zetradex/pt";
import jp from "public/locales/main-page/about-zetradex/jp";
import it from "public/locales/main-page/about-zetradex/it";
import uz from "public/locales/main-page/about-zetradex/uz";
import pk from "public/locales/main-page/about-zetradex/pk";
import { getTranslations } from "common/utils/getTranslations";
import cls from "./AboutZetradex.module.scss";

const AboutZetradex = () => {
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
    <div className={`${cls.AboutZetradex} __container`}>
      <div className={cls.AboutZetradex_header}>
        <h2>{t.AboutZetradex}</h2>
      </div>
      <div className={cls.AboutZetradex_wrapper}>
        <div className={cls.AboutZetradex_wrapper_left}>
          <p>{t.ZetradexIsLeading}</p>
          <p>{t.ZetradexStands}</p>
        </div>
        <div className={cls.AboutZetradex_wrapper_center}>
          <p>{t.ThisTechnology}</p>
        </div>
        <div className={cls.AboutZetradex_wrapper_right}>
          <p>{t.WithAFocus}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutZetradex;
