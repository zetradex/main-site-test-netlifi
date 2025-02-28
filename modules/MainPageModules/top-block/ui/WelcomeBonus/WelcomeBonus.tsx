import { FC, memo } from "react";
import Link from "next/link";
import cls from "./WelcomeBonus.module.scss";

interface IWelcomeBonus {
  t: any;
}

export const WelcomeBonus: FC<IWelcomeBonus> = memo(({ t }) => {
  return (
    <div className={cls.WelcomeBonus}>
      <div className={cls.WelcomeBonus_wrapper}>
        <div className={cls.WelcomeBonus_wrapper_left}>
          <div className={cls.WelcomeBonus_header}>
            <h1>{t.WelcomeBonus}</h1>
            <h3>{t.YourFirst}</h3>
          </div>
          <div className={cls.WelcomeBonus_btn}>
            <Link href="/welcome-bonus">{t.ClaimBonus}</Link>
          </div>
        </div>
        <div className={cls.WelcomeBonus_wrapper_right} />
      </div>
    </div>
  );
});
