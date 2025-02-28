import style from "modules/MainPageModules/incredible-bonuses/ui/cards-block/BonusesCards.module.scss";
import Link from "next/link";

interface IBonusBlock {
    vip: boolean;
    xTwo: boolean;
    imgSrc?: any;
    alt?: any;
    cardTitle?: string;
    claimBonusBtn?: string;
    claimLink?: string;

    depositIncreaseTitle?: string;
    depositIncreaseInfo?: string;
    minDepositTitle?: string;
    minDepositInfo?: string;
    maxLeverageTitle?: string;
    maxLeverageInfo?: string;
    maxTradeVolumeTitle?: string;
    maxTradeVolumeInfo?: string;
    accountVerifiedTitle?: string;
    accountVerifiedInfo?: string;
}

export const BonusBlock = ({
                               vip,
                               xTwo,
                               alt,
                               imgSrc,
                               claimBonusBtn,
                               cardTitle,
                               claimLink,
                               depositIncreaseTitle,
                               depositIncreaseInfo,
                               minDepositTitle,
                               minDepositInfo,
                               maxLeverageTitle,
                               maxLeverageInfo,
                               maxTradeVolumeTitle,
                               maxTradeVolumeInfo,
                               accountVerifiedTitle,
                               accountVerifiedInfo,
                           }: IBonusBlock) => {
    return (
        <div className={style.inner}>
            {vip && (<div className={style.vip__lable}>
                <span>VIP</span>
            </div>)}
            <div className={style.inner_top}>
                <div className={style.inner_top_img}>
                    <img
                        width="100%"
                        height="100%"
                        src={imgSrc}
                        alt={alt}
                        loading={"lazy"}
                    />
                </div>
                <div className={style.description__block}>
                    <h3 className={style.header}>{cardTitle} {xTwo && <span>x2</span>}</h3>
                    <table className={style.table}>
                        <tbody>
                        <tr className={style.table__row}>
                            <td className={style.left__column}>{depositIncreaseTitle}</td>
                            <td className={style.right__column}>{depositIncreaseInfo}</td>
                        </tr>
                        <tr className={style.table__row}>
                            <td className={style.left__column}>{minDepositTitle}</td>
                            <td className={style.right__column}>{minDepositInfo}</td>
                        </tr>
                        <tr className={style.table__row}>
                            <td className={style.left__column}>{maxLeverageTitle}</td>
                            <td className={style.right__column}>{maxLeverageInfo}</td>
                        </tr>
                        <tr className={style.table__row}>
                            <td className={style.left__column}>{maxTradeVolumeTitle}</td>
                            <td className={style.right__column}>{maxTradeVolumeInfo}</td>
                        </tr>
                        <tr className={style.table__row}>
                            <td className={style.left__column}>{accountVerifiedTitle}</td>
                            <td className={style.right__column}>{accountVerifiedInfo}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={style.button__container}>
                <Link className={style.button} href={claimLink!}>
                    {claimBonusBtn}
                </Link>
            </div>
        </div>
    );
};
