import Image from "next/image";
import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { ContentToggleButton } from "./ContentToggleButton/ContentToggleButton";
import srcPhone from "public/images/zetradex-trading-app-and-platform/banner1.png";
import srcNotebook from "public/images/zetradex-trading-app-and-platform/banner2.webp";
import Google from "public/images/zetradex-trading-app-and-platform/google.svg";
import Apple from "public/images/zetradex-trading-app-and-platform/Apple.svg";
import Huawei from "public/images/zetradex-trading-app-and-platform/Huawei.svg";
import en from "public/locales/main-page/zetradex-trading-app-and-platform/en";
import ru from "public/locales/main-page/zetradex-trading-app-and-platform/ru";
import indonesia from "public/locales/main-page/zetradex-trading-app-and-platform/indonesia";
import ind from "public/locales/main-page/zetradex-trading-app-and-platform/in";
import cn from "public/locales/main-page/zetradex-trading-app-and-platform/cn";
import tw from "public/locales/main-page/zetradex-trading-app-and-platform/tw";
import vn from "public/locales/main-page/zetradex-trading-app-and-platform/vn";
import th from "public/locales/main-page/zetradex-trading-app-and-platform/th";
import es from "public/locales/main-page/zetradex-trading-app-and-platform/es";
import pt from "public/locales/main-page/zetradex-trading-app-and-platform/pt";
import jp from "public/locales/main-page/zetradex-trading-app-and-platform/jp";
import it from "public/locales/main-page/zetradex-trading-app-and-platform/it";
import uz from "public/locales/main-page/zetradex-trading-app-and-platform/uz";
import pk from "public/locales/main-page/zetradex-trading-app-and-platform/pk";
import { useRouter } from "next/router";
import { getTranslations } from "common/utils/getTranslations";
import style from "./ZetradexTradingAppAndPlatform.module.scss";
import { getMyZetradexPaths } from "common/routes/getMyZetradexPath";

interface IZetradexTradingAppAndPlatform {}

const ZetradexTradingAppAndPlatform = ({}: IZetradexTradingAppAndPlatform) => {
  const [isMobile, setIsMobile] = useState(false);
  const [content, setContent] = useState<"app" | "platform">("app");

  const images = [
    {
      content: "app",
      classNameActive: style.left__block_image_phone_active,
      classNameInactive: style.left__block_image_phone,
      src: srcPhone,
      loading: "lazy" as "lazy",
    },
    {
      content: "platform",
      classNameActive: style.left__block_image_laptop_active,
      classNameInactive: style.left__block_image_laptop,
      src: srcNotebook,
      loading: "lazy" as "lazy",
    },
  ];

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
  const hostname = window.location.hostname;

  const paths = getMyZetradexPaths(hostname);

  useEffect(() => {
    setIsMobile(/android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={style.block}>
      <div className="ZetradexTradingAppAndPlatform__container">
        <div className={style.wrapper}>
          <div className={style.inner}>
            <div className={style.left__block_wrapper}>
              <div className={style.left__block}>
                {images.map((image, index) => (
                  <Image
                    key={index}
                    className={
                      content === image.content
                        ? image.classNameActive
                        : image.classNameInactive
                    }
                    src={image.src}
                    alt="phones image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    loading={image.loading}
                  />
                ))}
              </div>
            </div>

            <div className={style.right__block}>
              <div className={style.right__block_buttons}>
                <ContentToggleButton
                  content={content}
                  setContent={setContent}
                  title={t.TradingApp}
                  buttonType="app"
                />
                <ContentToggleButton
                  content={content}
                  setContent={setContent}
                  title={t.WebtraderPlatform}
                  buttonType="platform"
                />
              </div>

              <div className={style.image__content}>
                {content === "app" ? (
                  <div
                    className={
                      content === "app"
                        ? style.appDescription__block_active
                        : style.appDescription__block
                    }
                  >
                    <h2 className={style.header}>{t.ZetradexTradingApp}</h2>
                    <p className={style.description}>
                      {t.ZetradexTradingAppP1}
                    </p>
                    <p className={style.description}>
                      {t.ZetradexTradingAppP2}
                    </p>
                    <div className={style.btn_wrapper_markets}>
                      <div className={style.btn_wrapper_markets_google}>
                        <Image
                          src={Google}
                          width={22}
                          height={24}
                          alt="google play"
                        />
                        <Link href={paths.GOOGLE_PLAY_APP_LINK}>
                          Google Play
                        </Link>
                      </div>

                      <div className={style.btn_wrapper_markets_apple}>
                        <Image
                          src={Apple}
                          width={24}
                          height={24}
                          alt="apple store"
                        />
                        <Link href={paths.APPLE_PLAY_APP_LINK}>
                          Apple Store
                        </Link>
                      </div>

                      <div className={style.btn_wrapper_markets_huawei}>
                        <Image
                          src={Huawei}
                          width={29}
                          height={22}
                          alt="huawei store"
                        />
                        <Link href={paths.HUAWEI_PLAY_APP_LINK}>
                          Huawei Play
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      content === "platform"
                        ? style.platformDescription__block_active
                        : style.platformDescription__block
                    }
                  >
                    <h2 className={style.header}>
                      {t.ZetradexTradingPlatform}
                    </h2>
                    <p className={style.description}>
                      {t.ZetradexTradingPlatformText}
                    </p>
                    <Link
                      href={
                        isMobile ? paths.M_WEB_ZETRADEX : paths.WEB_ZETRADEX
                      }
                      className={style.download__button}
                    >
                      {t.ExploreWebtrader}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ZetradexTradingAppAndPlatform);
