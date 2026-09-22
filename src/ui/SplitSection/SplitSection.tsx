import React, { type ReactNode } from "react";
import styles from "./SplitSection.module.scss";
import classNames from "classnames";

interface SplitSectionProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  children: React.ReactNode;
  customClass?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  title,
  description,
  customClass,
  children,
}) => (
  <div className={classNames(styles.splitSection, customClass)}>
    <div className={styles.leftColumn}>
      {typeof title === "string" ? (
        <div className={styles.title}>{title}</div>
      ) : (
        title
      )}
      {description &&
        (typeof description === "string" ? (
          <p className={styles.description}>{description}</p>
        ) : (
          <div className={styles.description}>{description}</div>
        ))}
    </div>
    <div className={styles.rightColumn}>
      <div className={styles.container}>{children}</div>
    </div>
  </div>
);

export default SplitSection;
