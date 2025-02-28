import style from "modules/MainPageModules/incredible-bonuses/ui/cards-block/BonusesCards.module.scss";
import icon1 from "public/images/mainBonusCards/MedalBonus.png";
import icon2 from "public/images/mainBonusCards/OlympicBonus.png";
import icon3 from "public/images/mainBonusCards/MarathonBonus.png";
import icon4 from "public/images/mainBonusCards/WelcomeBonus.png";
import icon5 from "public/images/mainBonusCards/PowerUpBonus.png";
import icon6 from "public/images/mainBonusCards/DoubleWelcomeBonus.png";
import { BonusBlock } from "./card-component/CardComponent";
import { useCountry } from 'common/provider/CountryProvider';

interface IBonusesCards {
  t: any;
}

export const BonusesCards = ({ t }: IBonusesCards) => {
  const { isLatamCountryBonuses, isIdMyCountryBonuses } = useCountry();

  const allTheRest = [
    {
      id: 1,
      vip: false,
      imgSrc: icon4,
      cardTitle: t.WelcomeBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: "50%",
      minDepositInfo: "1 USD",
      maxLeverageInfo: "1:3000",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueYes,
      claimLink: "/welcome-bonus",
    },
    {
      id: 2,
      vip: false,
      imgSrc: icon5,
      cardTitle: t.PowerUpBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: `${t.upTo} $1000`,
      minDepositInfo: "50 USD",
      maxLeverageInfo: "1:500",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueYes,
      claimLink: "/power-up-bonus",
    },
    {
      id: 3,
      vip: false,
      imgSrc: icon2,
      cardTitle: t.OlympicBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: "5000%",
      minDepositInfo: "1 USD",
      maxLeverageInfo: "1:50",
      maxTradeVolumeInfo: "0.5 lots",
      accountVerifiedInfo: t.accountVerifiedValueYes,
      claimLink: "/olympic-bonus",
    },
    /*   {
      id: 1,
      vip: false,
      imgSrc: icon1,
      cardTitle: t.MedalBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: "333%",
      minDepositInfo: "1 USD",
      maxLeverageInfo: "1:1000",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueNo,
      claimLink: "/medal-bonus",
    },

    {
      id: 3,
      vip: false,
      imgSrc: icon3,
      cardTitle: t.MarathonBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: "100%",
      minDepositInfo: "1 USD",
      maxLeverageInfo: "1:3000",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueNo,
      claimLink: "/marathon-bonus",
    },*/
  ];
  const arrForIdMaUz = [
    {
      id: 1,
      vip: false,
      imgSrc: icon4,
      cardTitle: t.WelcomeBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: "50%",
      minDepositInfo: "1 USD",
      maxLeverageInfo: "1:3000",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueYes,
      claimLink: "/welcome-bonus",
    },
    {
      id: 2,
      vip: false,
      imgSrc: icon5,
      cardTitle: t.PowerUpBonus,
      xTwo: false,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: `${t.upTo} $1000`,
      minDepositInfo: "50 USD",
      maxLeverageInfo: "1:500",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueYes,
      claimLink: "/power-up-bonus",
    },
    {
      id: 3,
      vip: true,
      imgSrc: icon6,
      cardTitle: t.WelcomeBonus,
      xTwo: true,
      depositIncreaseTitle: t.depositIncreaseTitle,
      minDepositTitle: t.minDepositTitle,
      maxLeverageTitle: t.maxLeverageTitle,
      maxTradeVolumeTitle: t.maxTradeVolumeTitle,
      accountVerifiedTitle: t.accountVerifiedTitle,
      claimBonusBtn: t.claimBonusBtn,

      depositIncreaseInfo: "100%",
      minDepositInfo: "1 USD",
      maxLeverageInfo: "1:3000",
      maxTradeVolumeInfo: t.maxTradeVolumeValueUnlimited,
      accountVerifiedInfo: t.accountVerifiedValueYes,
      claimLink: "/vip-trading-club",
    },
  ];

  return (
    <div className={style.wrapper}>
      {!isIdMyCountryBonuses ? (
        <>
          {allTheRest.map((fieldProps: any, index) => {
            return <BonusBlock key={index} {...fieldProps} />;
          })}
        </>
      ) : (
        <>
          {arrForIdMaUz.map((fieldProps: any, index) => {
            return <BonusBlock key={index} {...fieldProps} />;
          })}
        </>
      )}
    </div>
  );
};
