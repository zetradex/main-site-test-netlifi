import { FC, memo } from "react";
import Link from "next/link";
import { getMyZetradexPaths } from "common/routes/getMyZetradexPath";
import cls from "./NanoLot.module.scss";

interface INanoLot {
  t: any;
}

export const NanoLot: FC<INanoLot> = memo(({ t }) => {
  const hostname = window.location.hostname;
  const paths = getMyZetradexPaths(hostname);
  return (
    <div className={cls.NanoLot}>
      <div className={cls.NanoLot_wrapper}>
        <div className={cls.NanoLot_wrapper_left}>
          <div className={cls.NanoLot_header}>
            <h3>{t.CryptoAssets}</h3>
            <h1>{t.NanoLot}</h1>
          </div>
          <div className={cls.NanoLot_btn}>
            <Link href={paths.SIGN_UP_PAGE_LINK}>{t.OpenAcc}</Link>
          </div>
        </div>
        <div className={cls.NanoLot_wrapper_right} />
      </div>
    </div>
  );
});
