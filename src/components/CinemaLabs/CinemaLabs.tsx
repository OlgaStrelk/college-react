import React from "react";
import styles from "./CinemaLabs.module.scss";
import { ListCard } from "../../ui/ListCard";

interface Lab {
  title: string;
  instructor?: string;
}

interface Semester {
  title: string;
  labs: Lab[];
}

const semesters: Semester[] = [
  {
    title: "1 полугодие — открытие кино",
    labs: [
      { title: "Фильм на кинопленке", instructor: "Лунина Дарья" },
      { title: "Клип", instructor: "Орлов Глеб" },
      { title: "Фильм-эссе", instructor: "Светлова Анна" },
      { title: "Нейросетевое кино", instructor: "Орлов Глеб" },
      {
        title: "Found Footage. Монтажное кино",
        instructor: "Ковалёв Борис",
      },
    ],
  },
  {
    title: "2 полугодие — диалог с классиками кино",
    labs: [
      { title: "Фильм-портрет", instructor: "Мельников Егор" },
      {
        title: "Кинокопия как интерпретация фильма",
        instructor: "Нестерова Вера",
      },
      {
        title:
          "Изучение феноменов киномонтажа классиков кинематографа, съёмка фильмов по этим феноменам",
        instructor: "Лунина Дарья",
      },
      { title: "Экспериментальный фильм", instructor: "Ковалёв Борис" },
    ],
  },
];

const CinemaLabs: React.FC = () => {
  return (
    <div className={styles["labs-container"]}>
      <h3 className={styles.title}>
        *Лаборатории экспериментальных форм (практика в рамках курса
        «кинопроизводство»)
      </h3>
      <div className={styles["labs-grid"]}>
        {semesters.map((semester, index) => (
          <ListCard key={index} title={semester.title} list={semester.labs} />
        ))}
      </div>
    </div>
  );
};

export default CinemaLabs;
