import style from "./Wrapper.module.scss";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

export const Wrapper = (props: PropsType) => {
  const className = props.className
    ? `${props.className} ${style.container}`
    : `${style.container}`;

  return <section className={className}>{props.children}</section>;
};
