import type { ReactNode } from "react";
import style from "./section.module.css";

interface Props {
  topTitle: string;
  mainTitle: string;
  secondTitle?: string;
  description?: string;
  children?: ReactNode;
}

export default function Section({
  topTitle,
  mainTitle,
  secondTitle,
  description,
  children,
}: Props) {
  return (
      <div className={style.content}>
        <p className={style.topTitle}>{topTitle}</p>
        <h2 className={style.mainTitle}>{mainTitle}</h2>
        <h2 className={style.mainTitle}>{secondTitle}</h2>
        <p className={style.description}>{description}</p>
        {children}
      </div>
  );
}