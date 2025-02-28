import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import item from "../img/ze1.png";
import cls from "./PartOfZeholding.module.scss";
import { useRouter } from "next/router";
import en from "public/locales/main-page/part-of-zeholding/en";
import ru from "public/locales/main-page/part-of-zeholding/ru";
import indonesia from "public/locales/main-page/part-of-zeholding/indonesia";
import ind from "public/locales/main-page/part-of-zeholding/in";
import cn from "public/locales/main-page/part-of-zeholding/cn";
import tw from "public/locales/main-page/part-of-zeholding/tw";
import vn from "public/locales/main-page/part-of-zeholding/vn";
import th from "public/locales/main-page/part-of-zeholding/th";
import es from "public/locales/main-page/part-of-zeholding/es";
import pt from "public/locales/main-page/part-of-zeholding/pt";
import jp from "public/locales/main-page/part-of-zeholding/jp";
import it from "public/locales/main-page/part-of-zeholding/it";
import uz from "public/locales/main-page/part-of-zeholding/uz";
import pk from "public/locales/main-page/part-of-zeholding/pk";
import { getTranslations } from "common/utils/getTranslations";

interface IPartOfZeholding {}

const PartOfZeholding: FC<IPartOfZeholding> = () => {
  const { locale } = useRouter();

  const localizations = {
    en,
    ru,
    indonesia,
    ind,
    cn,
    tw,
    vn,
    th,
    es,
    pt,
    jp,
    it,
    uz,
    pk,
  };
  const t = getTranslations(localizations, locale);

  return (
    <section className={cls.PartOfZeholding}>
      <div className="PartOfZeholding__container">
        <div className={cls.PartOfZeholding_wrapper}>
          <div className={cls.PartOfZeholding_left}>
            <div className={cls.PartOfZeholding_header}>
              <h3>{t.Part}</h3>
            </div>
            <div className={cls.PartOfZeholding_desc}>
              <p>{t.zeHoldingGroup}</p>
            </div>
            <div className={cls.PartOfZeholding_btn}>
              <Link target="_blank" href="https://zeholding.ltd/">
                zeholding.ltd
              </Link>
            </div>
          </div>
          <div className={cls.PartOfZeholding_right}>
            <div className={cls.PartOfZeholding_image}>
              <Image src={item} alt="banner" width={769} height={445} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOfZeholding;
