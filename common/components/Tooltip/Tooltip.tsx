import { ReactNode, useEffect, useState } from "react";
import cls from "./Tooltip.module.scss";

interface ITooltip {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: ITooltip) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTooltip(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cls.TooltipContainer}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className={cls.Tooltip}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
