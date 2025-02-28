import { FC, memo, useEffect, useState } from "react";
import Link from "next/link";
import { getMyZetradexPaths } from "common/routes/getMyZetradexPath";
import cls from "./NewEra.module.scss";

interface INewEra {
  t: any;
}

export const NewEra: FC<INewEra> = memo(({ t }) => {
  const [isMobile, setIsMobile] = useState(false);

  const hostname = window.location.hostname;
  const paths = getMyZetradexPaths(hostname);

  useEffect(() => {
    setIsMobile(/android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={cls.NewEra}>
      <div className={cls.NewEra_wrapper}>
        <div className={cls.NewEra_wrapper_left}>
          <div className={cls.NewEra_header}>
            <h1>{t.NewEra}</h1>
            <h3>{t.TradeCrypto}</h3>
          </div>
          <div className={cls.NewEra_btn}>
            <Link href={isMobile ? paths.M_WEB_ZETRADEX : paths.WEB_ZETRADEX}>
              {t.OpenPlatform}
            </Link>
          </div>
        </div>
        <div className={cls.NewEra_wrapper_right} />
      </div>
    </div>
  );
});
