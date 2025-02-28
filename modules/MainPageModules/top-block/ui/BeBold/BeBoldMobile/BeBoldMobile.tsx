import { FC, memo } from "react";
import Image from "next/image";
import Brimin from "public/images/main-page/top-block/img.png";
import banner from "public/images/main-page/top-block/mobile/banner1.png";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { useScrollForm } from "common/utils/useScrollForm/useScrollForm";
import cls from "./BeBoldMobile.module.scss";

interface IBeBoldMobile {
  t: any;
}

export const BeBoldMobile: FC<IBeBoldMobile> = memo(({ t }) => {
  const scrollForm = useScrollForm({ idElement: "signUpForm" });

  return (
    <div className={cls.BeBoldMobile}>
      <div className={cls.BeBoldMobile_wrapper}>
        <div className={cls.BeBoldMobile_wrapper_left}>
          <div className={cls.BeBoldMobile_image}>
            <Image
              loading="eager"
              width={950}
              height={550}
              src={banner}
              alt="banner"
            />
          </div>
        </div>

        <div className={cls.BeBoldMobile_wrapper_right}>
          <div className={cls.BeBoldMobile_header}>
            <h1>{t.BeBoldBeSmart}</h1> <h1>{t.TradeZetradex}</h1>
          </div>
          <div className={cls.BeBoldMobile_btn}>
            <SuperButton onClick={scrollForm}>{t.GetStarted}</SuperButton>
          </div>
          <div className={cls.BeBoldMobile_card}>
            <div className={cls.BeBoldMobile_card_image}>
              <Image
                src={Brimin}
                alt="Brimin Kipruto"
                width={120}
                height={120}
              />
            </div>
            <div className={cls.BeBoldMobile_card_wrapper}>
              <div className={cls.BeBoldMobile_card_wrapper_title}>
                <h4>{t.ZetradexHasOpened}</h4>
              </div>
              <div className={cls.BeBoldMobile_card_wrapper_desc}>
                <p>
                  {t.Ambassador} <br /> <span>Brimin Kipruto,</span> <br />
                  {t.Kenyan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
