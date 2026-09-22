import React from "react";
import classNames from "classnames";

import styles from "./StyledCard.module.scss";

import Icon1 from "../../assets/icons/workshop/icon1.svg?react";
import Icon2 from "../../assets/icons/workshop/icon2.svg?react";
import Icon3 from "../../assets/icons/workshop/icon3.svg?react";
import Icon4 from "../../assets/icons/workshop/icon4.svg?react";
import Icon5 from "../../assets/icons/workshop/icon5.svg?react";
import Icon6 from "../../assets/icons/workshop/icon6.svg?react";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  icon4: Icon4,
  icon5: Icon5,
  icon6: Icon6,
};

interface StyledCardProps {
  title: string;
  image?: string;
  popupDescription?: string;
  places?: number;
  icon: keyof typeof iconMap;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const StyledCard: React.FC<StyledCardProps> = ({
  title,
  icon,
  onClick,
  className,
  children,
}) => {
  const Icon = iconMap[icon];
  const isButton = !!onClick;

  const interactiveProps = isButton
    ? {
        role: "button",
        tabIndex: 0,
        "aria-label": `Подробнее о ${title}`,
        onClick,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === "Space") {
            e.preventDefault();
            onClick?.();
          }
        },
      }
    : {};

  return (
    <div
      className={classNames(styles["card-item"], className)}
      {...interactiveProps}
    >
      <div className={styles["card-background"]}></div>
      <Icon className={styles["card-icon"]} />
      {children}
    </div>
  );
};

export default StyledCard;
