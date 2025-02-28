import { FC, memo } from "react";
import Link from "next/link";
import banner from "public/images/main-page/top-block/mobile/banner3.png";
import Image from "next/image";
import { getMyZetradexPaths } from "common/routes/getMyZetradexPath";
import cls from "./NanoLotMobile.module.scss";

interface INanoLotMobile {
  t: any;
}

export const NanoLotMobile: FC<INanoLotMobile> = memo(({ t }) => {
  const hostname = window.location.hostname;
  const paths = getMyZetradexPaths(hostname);

  return (
    <div className={cls.NanoLotMobile}>
      <div className={cls.NanoLotMobile_wrapper}>
        <div className={cls.NanoLotMobile_wrapper_left}>
          <div className={cls.NanoLotMobile_image}>
            <Image
              loading="eager"
              width={950}
              height={550}
              src={banner}
              alt="banner"
            />
          </div>
        </div>
        <div className={cls.NanoLotMobile_wrapper_right}>
          <div className={cls.NanoLotMobile_header}>
            <h1>{t.CryptoAssets}</h1>
            <h3>{t.NanoLot}</h3>
          </div>
          <div className={cls.NanoLotMobile_btn}>
            <Link href={paths.SIGN_UP_PAGE_LINK}>{t.OpenAcc}</Link>
          </div>
        </div>
      </div>
    </div>
  );
});
