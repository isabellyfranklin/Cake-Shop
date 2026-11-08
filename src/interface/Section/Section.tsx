import type { ReactNode } from "react";
import styles from "./section.module.css";

interface Props {
  topTitle?: string;
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
      <div className={styles.content}>
        {topTitle && <p className={styles.topTitle}>{topTitle}</p>}
        <h2 className={styles.mainTitle}>
          {mainTitle}
          {secondTitle && (
            <>
              <br />
              {secondTitle}
            </>
          )}
        </h2>
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
  );
}