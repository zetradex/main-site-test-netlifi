import { FC, memo } from "react";
import Image from "next/image";
import cryptoBanner from "public/images/why-choose-us-main-page/item2.png";
import cls from "./CryptoTrading.module.scss";

interface ICryptoTrading {}

export const CryptoTrading: FC<ICryptoTrading> = memo(({}) => {
  return (
    <div className={cls.CryptoTrading}>
      <div className={cls.CryptoTrading_img}>
        <Image src={cryptoBanner} alt="banner" width={428} height={334} />
      </div>
      <div className={cls.CryptoTrading_wrapper}>
        <div className={cls.CryptoTrading_title}>
          <h3>Crypto Trading</h3>
        </div>
        <div className={cls.CryptoTrading_desc}>
          <p>Nano lot 0.001</p>
          <p>Leverage 1:100</p>
          <p>Trading on weekend</p>
        </div>
      </div>
    </div>
  );
});
