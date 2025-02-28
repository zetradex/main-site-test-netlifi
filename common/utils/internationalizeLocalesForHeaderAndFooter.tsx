import { HeaderLocaleType } from "public/locales/header/types";
import en from "public/locales/header/en";
import id from "public/locales/header/indonesia";
import ru from "public/locales/header/ru";
import india from "public/locales/header/in";
import cn from "public/locales/header/cn";
import tw from "public/locales/header/tw";
import vn from "public/locales/header/vn";
import th from "public/locales/header/th";
import es from "public/locales/header/es";
import pt from "public/locales/header/pt";
import jp from "public/locales/header/jp";
import it from "public/locales/header/it";
import uz from "public/locales/header/uz";
import pk from "public/locales/header/pk";

type LocalesType = {
  [key: string]: {
    t: HeaderLocaleType;
    currentLanguageText: string;
    currentLanguageImage: string;
    fullLanguageText: string;
  };
};

export const locales: LocalesType = {
  en: {
    t: en,
    currentLanguageText: "EN",
    currentLanguageImage: "/country_flags/GB.svg",
    fullLanguageText: "English",
  },
  id: {
    t: id,
    currentLanguageText: "ID",
    currentLanguageImage: "/country_flags/ID.svg",
    fullLanguageText: "Bahasa Indonesia",
  },
  ru: {
    t: ru,
    currentLanguageText: "RU",
    currentLanguageImage: "/country_flags/RU.svg",
    fullLanguageText: "Русский",
  },
  "en-IN": {
    t: india,
    currentLanguageText: "IN",
    currentLanguageImage: "/country_flags/IN.svg",
    fullLanguageText: "भारतीय हिन्दी",
  },
  "zh-CN": {
    t: cn,
    currentLanguageText: "CN",
    currentLanguageImage: "/country_flags/CN.svg",
    fullLanguageText: "中文普通话",
  },

  "zh-Hant-TW": {
    t: tw,
    currentLanguageText: "TW",
    currentLanguageImage: "/country_flags/TW.svg",
    fullLanguageText: "粵語 中文",
  },
  "vi-VN": {
    t: vn,
    currentLanguageText: "VN",
    currentLanguageImage: "/country_flags/VN.svg",
    fullLanguageText: "Tiếng Việt",
  },
  "th-TH": {
    t: th,
    currentLanguageText: "TH",
    currentLanguageImage: "/country_flags/TH.svg",
    fullLanguageText: "ไทย",
  },
  "ca-ES": {
    t: es,
    currentLanguageText: "ES",
    currentLanguageImage: "/country_flags/ES.svg",
    fullLanguageText: "Español",
  },
  "pt-PT": {
    t: pt,
    currentLanguageText: "PT",
    currentLanguageImage: "/country_flags/PT.svg",
    fullLanguageText: "Português",
  },
  "ja-JP": {
    t: jp,
    currentLanguageText: "JP",
    currentLanguageImage: "/country_flags/JP.svg",
    fullLanguageText: "日本語",
  },
  "it-IT": {
    t: it,
    currentLanguageText: "IT",
    currentLanguageImage: "/country_flags/IT.svg",
    fullLanguageText: "Italy",
  },
  uz: {
    t: uz,
    currentLanguageText: "UZ",
    currentLanguageImage: "/country_flags/UZ.svg",
    fullLanguageText: "Uzbek",
  },
  "pa-Arab-PK": {
    t: pk,
    currentLanguageText: "PK",
    currentLanguageImage: "/country_flags/PK.svg",
    fullLanguageText: "اردو",
  },
};
