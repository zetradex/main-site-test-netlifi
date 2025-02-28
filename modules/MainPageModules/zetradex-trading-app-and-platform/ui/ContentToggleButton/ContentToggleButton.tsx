import { SuperButton } from "common/components/SuperButton/SuperButton";
import style from "modules/MainPageModules/zetradex-trading-app-and-platform/ui/ZetradexTradingAppAndPlatform.module.scss";

interface IContentToggleButton {
  content: any;
  setContent: any;
  title: any;
  buttonType: any;
  t?: any;
}

export const ContentToggleButton = ({
  content,
  setContent,
  title,
  buttonType,
  t,
}: IContentToggleButton) => {
  const isActive = content === buttonType;

  return (
    <SuperButton
      className={
        isActive ? style.right__block_button_active : style.right__block_button
      }
      title={title}
      onClick={() => setContent(buttonType)}
    />
  );
};
