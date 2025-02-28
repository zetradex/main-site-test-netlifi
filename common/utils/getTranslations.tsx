interface ITranslation {
  [key: string]: any;
}

export function getTranslations(
  localizations: { [key: string]: ITranslation },
  currentLocale: any
): ITranslation {
  let t: any;

  const defaultLocale = "en";
  const normalizedLocale = currentLocale || defaultLocale;

  switch (normalizedLocale) {
    case "en":
      t = localizations["en"];
      break;
    case "ru":
      t = localizations["ru"];
      break;
    case "id":
      t = localizations["indonesia"];
      break;
    case "en-IN":
      t = localizations["ind"];
      break;
    case "zh-CN":
      t = localizations["cn"];
      break;
    case "zh-Hant-TW":
      t = localizations["tw"];
      break;
    case "vi-VN":
      t = localizations["vn"];
      break;
    case "th-TH":
      t = localizations["th"];
      break;
    case "ca-ES":
      t = localizations["es"];
      break;
    case "pt-PT":
      t = localizations["pt"];
      break;
    case "ja-JP":
      t = localizations["jp"];
      break;
    case "it-IT":
      t = localizations["it"];
      break;
    case "uz":
      t = localizations["uz"];
      break;
    case "pa-Arab-PK":
      t = localizations["pk"];
      break;
    default:
      t = localizations[defaultLocale];
      break;
  }
  return t || localizations[defaultLocale];
}
