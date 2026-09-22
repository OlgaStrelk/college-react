import React, { type MouseEventHandler } from "react";
import styles from "./Popup.module.scss";
import CloseIcon from "../../assets/icons/close.svg?react";

export interface IPopup {
  title: string;
  description: string;
  isOpen: boolean;
}

interface PopupProps {
  popup: IPopup;
  handleClose: MouseEventHandler<SVGSVGElement | HTMLDivElement>;
}

const Popup: React.FC<PopupProps> = ({ popup, handleClose }) => {
  if (!popup.isOpen) {
    return null;
  }

  return (
    <div className={styles.popup}>
      <div className={styles["popup-overlay"]} onClick={handleClose}></div>
      <div className={styles["popup-content"]}>
        <div className={styles["popup-header"]}>
          <h3 className={styles["popup-title"]}>Мастерская "{popup.title}"</h3>
          <CloseIcon
            className={styles["popup-close"]}
            onClick={handleClose}
            role="button"
            aria-label="Закрыть попап"
          />
        </div>
        <p className={styles["popup-description"]}>{popup.description}</p>
      </div>
    </div>
  );
};

export default Popup;
