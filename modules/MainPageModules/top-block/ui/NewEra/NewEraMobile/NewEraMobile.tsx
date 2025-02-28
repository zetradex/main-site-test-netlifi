import { FC, memo, useEffect, useState } from "react";
import Link from "next/link";
import banner from "public/images/main-page/top-block/mobile/banner4.jpg";
import Image from "next/image";
import { getMyZetradexPaths } from "common/routes/getMyZetradexPath";
import cls from "./NewEraMobile.module.scss";

interface INewEraMobile {
  t: any;
}

export const NewEraMobile: FC<INewEraMobile> = memo(({ t }) => {
  const [isMobile, setIsMobile] = useState(false);
  const hostname = window.location.hostname;
  const paths = getMyZetradexPaths(hostname);

  useEffect(() => {
    setIsMobile(/android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={cls.NewEraMobile}>
      <div className={cls.NewEraMobile_wrapper}>
        <div className={cls.NewEraMobile_wrapper_left}>
          <div className={cls.NewEraMobile_image}>
            <Image
              loading="eager"
              width={950}
              height={550}
              src={banner}
              alt="banner"
            />
          </div>
        </div>
        <div className={cls.NewEraMobile_wrapper_right}>
          <div className={cls.NewEraMobile_header}>
            <h1>{t.NewEra}</h1>
            <h3>{t.TradeCrypto}</h3>
          </div>
          <div className={cls.NewEraMobile_btn}>
            <Link href={isMobile ? paths.M_WEB_ZETRADEX : paths.WEB_ZETRADEX}>
              {t.OpenPlatform}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
