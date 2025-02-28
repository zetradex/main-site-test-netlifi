import { FC, memo } from "react";
import Image from "next/image";
import Brimin from "public/images/main-page/top-block/img.png";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { useScrollForm } from "common/utils/useScrollForm/useScrollForm";
import cls from "./BeBold.module.scss";

interface IBeBold {
  t: any;
}

export const BeBold: FC<IBeBold> = memo(({ t }) => {
  const scrollForm = useScrollForm({ idElement: "signUpForm" });

  return (
    <div className={cls.BeBold}>
      <div className={cls.BeBold_wrapper}>
        <div className={cls.BeBold_wrapper_left}>
          <div className={cls.BeBold_header}>
            <h1>{t.BeBoldBeSmart}</h1> <h1>{t.TradeZetradex}</h1>
          </div>
          <div className={cls.BeBold_btn}>
            <SuperButton onClick={scrollForm}>{t.GetStarted}</SuperButton>
          </div>
          <div className={cls.BeBold_card}>
            <div className={cls.BeBold_card_image}>
              <Image
                loading="eager"
                src={Brimin}
                alt="Brimin Kipruto"
                width={120}
                height={120}
              />
            </div>
            <div className={cls.BeBold_card_wrapper}>
              <div className={cls.BeBold_card_wrapper_title}>
                <h4>{t.ZetradexHasOpened}</h4>
              </div>
              <div className={cls.BeBold_card_wrapper_desc}>
                <p>
                  {t.Ambassador} <br /> <span>Brimin Kipruto,</span> <br />
                  {t.Kenyan}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.BeBold_wrapper_right} />
      </div>
    </div>
  );
});
