import { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "public/images/main-page/top-block/mobile/banner2.png";
import cls from "./WelcomeBonusMobile.module.scss";

interface IWelcomeBonusMobile {
  t: any;
}

export const WelcomeBonusMobile: FC<IWelcomeBonusMobile> = memo(({ t }) => {
  return (
    <div className={cls.WelcomeBonusMobile}>
      <div className={cls.WelcomeBonusMobile_wrapper}>
        <div className={cls.WelcomeBonusMobile_wrapper_left}>
          <div className={cls.WelcomeBonusMobile_image}>
            <Image
              loading="eager"
              width={950}
              height={550}
              src={banner}
              alt="banner"
            />
          </div>
        </div>
        <div className={cls.WelcomeBonusMobile_wrapper_right}>
          <div className={cls.WelcomeBonusMobile_header}>
            <h1>{t.WelcomeBonus}</h1>
            <h3>{t.YourFirst}</h3>
          </div>
          <div className={cls.WelcomeBonusMobile_btn}>
            <Link href="/welcome-bonus">{t.ClaimBonus}</Link>
          </div>
        </div>
      </div>
    </div>
  );
});
