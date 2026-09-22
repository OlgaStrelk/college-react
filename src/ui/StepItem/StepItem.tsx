import React from "react";
import styles from "./StepItem.module.scss";

interface DateItem {
  text: string;
  isBold?: boolean;
}

interface StepItemProps {
  label: string;
  date: DateItem[];
  showSeparator?: boolean;
  variant?: "default" | "exams";
  renderDate?: () => React.ReactNode;
}

const StepItem: React.FC<StepItemProps> = ({
  label,
  date,
  showSeparator = false,
  variant = "default",
  renderDate,
}) => (
  <div
    className={`${styles["step-item"]} ${
      variant === "exams" ? styles["step-item-exams"] : ""
    }`}
  >
    <div className={styles["step-text"]}>
      {variant === "exams" ? (
        <>
          <div className={styles["step-dates"]}>
            {renderDate ? (
              renderDate()
            ) : (
              date.map((item, idx) => (
                <span
                  key={idx}
                  className={item.isBold ? styles["bold"] : ""}
                >
                  {item.text}
                </span>
              ))
            )}
          </div>
          <span className={styles["step-label"]}>{label}</span>
        </>
      ) : (
        <>
          <span className={styles["step-label"]}>{label}</span>
          <div className={styles["step-dates"]}>
            {renderDate ? (
              renderDate()
            ) : (
              date.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className={item.isBold ? styles["bold"] : ""}>
                    {item.text}
                  </span>
                  {idx < date.length - 1 && <br />}
                </React.Fragment>
              ))
            )}
          </div>
        </>
      )}
    </div>
    {showSeparator && <div className={styles.separator} />}
  </div>
);

export default StepItem;