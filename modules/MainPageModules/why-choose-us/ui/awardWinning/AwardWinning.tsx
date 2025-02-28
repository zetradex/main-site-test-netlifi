import { FC, memo } from "react";
import Image from "next/image";
import award from "public/images/why-choose-us-main-page/item3.png";
import cls from "./AwardWinning.module.scss";

interface IAwardWinning {}

export const AwardWinning: FC<IAwardWinning> = memo(({}) => {
  return (
    <div className={cls.AwardWinning}>
      <div className={cls.AwardWinning_header}>
        <h3>Award Winning Broker</h3>
      </div>
      <div className={cls.AwardWinning_img}>
        <Image src={award} width={425} height={412} alt={"award winning"} />
      </div>
    </div>
  );
});
