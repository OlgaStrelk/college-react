import styles from "./Teachers.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LinkButton } from "../../ui/LinkButton";
import WhiteLink from "../../assets/icons/link_white.svg?react";
import { TeacherCard } from "../../ui/TeacherCard";
import { teachersData, type Teacher } from "../../assets/data/teachersData";

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(teachersData);

  const doubledTeachers = useMemo(() => [...teachers, ...teachers], [teachers]);

  useEffect(() => {
    setTeachers(teachersData);

    const carousel = document.querySelector(`.${styles["teachers-carousel"]}`);
    if (carousel) {
      const cardWidth = 307.33 + 20;
      const maxOffset = teachers.length * cardWidth;
      const randomOffset = Math.floor(Math.random() * maxOffset);
      (carousel as HTMLElement).style.setProperty(
        "--random-offset",
        `-${randomOffset}px`,
      );
    }
  }, [teachers.length]);
  return (
    <section className={styles.teachers} id="teachers">
      <div className={styles.container}>
        <h2>Педагоги и сотрудники</h2>
        <div className={styles["teachers-carousel"]}>
          {doubledTeachers.map((teacher, index) => (
            <TeacherCard key={`${teacher.name}-${index}`} teacher={teacher} customClass={styles["carousel-card"]} />
          ))}
        </div>
      </div>
      <div className={styles["button-container"]}>
        <LinkButton
          variant="default"
          size="md"
          icon={WhiteLink}
          href="/teachers"
        >
          Все преподаватели
        </LinkButton>
      </div>
    </section>
  );
};

export default Teachers;
