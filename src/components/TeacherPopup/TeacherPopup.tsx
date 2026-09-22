import React, { type MouseEventHandler } from "react";
import styles from "./TeacherPopup.module.scss";
import CloseIcon from "../../assets/icons/close.svg?react";
import type { Teacher } from "../../assets/data/teachersData";

interface TeacherPopupProps {
  teacher: Teacher;
  handleClose: MouseEventHandler<SVGSVGElement | HTMLDivElement>;
}

const TeacherPopup: React.FC<TeacherPopupProps> = ({
  teacher,
  handleClose,
}) => {
  if (!teacher) {
    return null;
  }

  const educationItems = teacher.education ? teacher.education.split("\n") : [];
  const additionalInfoItems = teacher.additionalInfo
    ? teacher.additionalInfo.split("\n")
    : [];

  return (
    <div className={styles.popup}>
      <div className={styles["popup-overlay"]} onClick={handleClose}></div>
      <div className={styles["popup-content"]}>
        <div className={styles["popup-header"]}>
          <CloseIcon
            className={styles["popup-close"]}
            onClick={handleClose}
            role="button"
            aria-label="Закрыть попап"
          />
        </div>
        <div className={styles["popup-body"]}>
          <div className={styles["popup-image"]}>
            <img src={teacher.image} alt={teacher.name} />
          </div>
          <div className={styles["popup-text"]}>
            <h2 className={styles["popup-title"]}>{teacher.name}</h2>
            <p className={styles["popup-role"]}>{teacher.role}</p>
            <div className={styles["scroll-area"]}>
              {educationItems.length > 0 && (
                <div className={styles["popup-section"]}>
                  <h3 className={styles["popup-section-title"]}>Образование</h3>
                  <ul className={styles["popup-list"]}>
                    {educationItems.map((item, index) => (
                      <li key={index} className={styles["popup-list-item"]}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {additionalInfoItems.length > 0 && (
                <div className={styles["popup-section"]}>
                  {additionalInfoItems.map((item, index) => (
                    <p key={index} className={styles["popup-info"]}>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPopup;
