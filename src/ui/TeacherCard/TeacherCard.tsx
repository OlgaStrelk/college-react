import React from "react";
import clsx from "clsx";
import styles from "./TeacherCard.module.scss";
import type { Teacher } from "../../assets/data/teachersData";

interface TeacherCardProps {
  teacher: Teacher;
  onClick?: () => void;
  customClass?: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  teacher,
  onClick,
  customClass,
}) => {
  return (
    <div
      className={clsx(styles["teacher-card"], customClass)}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {teacher.image && (
        <img
          src={teacher.image}
          alt={`${teacher.name}, портрет`}
          className={styles["teacher-image"]}
        />
      )}
      <div className={styles["teacher-info"]}>
        <h3 className={styles["teacher-name"]}>{teacher.name}</h3>
        <p className={styles["teacher-role"]}>{teacher.role}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
