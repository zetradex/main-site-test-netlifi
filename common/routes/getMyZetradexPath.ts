import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { convertCampaign } from "../utils/convertCampaign";

export function getMyZetradexPaths(fullHostname: string) {
  const { pathname } = useRouter();
  // Извлекаем только TLD из полного хостнейма
  const parts = fullHostname.split(".");
  const topLevelDomain = parts.length > 1 ? parts[parts.length - 1] : "com"; // По умолчанию используем .com
  return {
    WEB_ZETRADEX: `https://web.zetradex.${topLevelDomain}/sign-in`,
    M_WEB_ZETRADEX: `https://mweb.zetradex.${topLevelDomain}/sign-in`,
    MY_ZETRADEX_PAGE_LINK: `https://my.zetradex.${topLevelDomain}`,
    SIGN_IN_PAGE_LINK: `https://my.zetradex.${topLevelDomain}/auth/sign-in`,
    SIGN_UP_PAGE_LINK: Cookies.get("x")
      ? `https://my.zetradex.${topLevelDomain}/auth/sign-up?x=${Cookies.get(
          "x"
        )}&campaign=${convertCampaign(pathname)}`
      : `https://my.zetradex.${topLevelDomain}/auth/sign-up?campaign=${convertCampaign(
          pathname
        )}`,
    SIGN_UP_IB_PAGE_LINK: Cookies.get("x")
      ? `https://my.zetradex.${topLevelDomain}/auth/sign-up-ib?x=${Cookies.get(
          "x"
        )}&campaign=${convertCampaign(pathname)}`
      : `https://my.zetradex.${topLevelDomain}/auth/sign-up-ib?campaign=${convertCampaign(
          pathname
        )}`,
    SIGN_UP_KOL_PAGE_LINK: Cookies.get("x")
      ? `https://my.zetradex.${topLevelDomain}/auth/sign-up-kol?x=${Cookies.get(
          "x"
        )}&campaign=${convertCampaign(pathname)}`
      : `https://my.zetradex.${topLevelDomain}/auth/sign-up-kol?campaign=${convertCampaign(
          pathname
        )}`,
    SIGN_UP_DEMO_PAGE_LINK: Cookies.get("x")
      ? `https://my.zetradex.${topLevelDomain}/auth/sign-up-demo?x=${Cookies.get(
          "x"
        )}&campaign=${convertCampaign(pathname)}`
      : `https://my.zetradex.${topLevelDomain}/auth/sign-up-demo?campaign=${convertCampaign(
          pathname
        )}`,
    DEPOSIT_PAGE_LINK_TAB: `https://my.zetradex.${topLevelDomain}/personal-area/financial/deposit?tab=deposit`,
    GOOGLE_PLAY_APP_LINK:
      topLevelDomain === "id"
        ? "https://play.google.com/store/apps/details?id=zetradex.id.tradingapp"
        : "https://play.google.com/store/apps/details?id=com.zetradex.tradingapp",
    HUAWEI_PLAY_APP_LINK: "https://appgallery.huawei.com/app/C113143511",
    APPLE_PLAY_APP_LINK: "/",
  };
}
