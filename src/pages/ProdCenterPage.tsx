import React, { useState } from "react";
import styles from "./ProdCenterPage.module.scss";
import { SplitSection } from "../ui/SplitSection";
import TriangleIcon from "../assets/icons/triangle.svg";
import CirclesIcon from "../assets/icons/circles.svg";
import FourTrianglesIcon from "../assets/icons/four-triangles.svg";
import ThreeCirclesIcon from "../assets/icons/three-circles.svg";
import ExpandIcon from "../assets/icons/arrow-down.svg";
import classNames from "classnames";

interface CardData {
  icon: string;
  text: string;
}

interface AccordionItem {
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    icon: TriangleIcon,
    text: "Интеграция творческих команд студентов в киноиндустрию и театр",
  },
  {
    icon: CirclesIcon,
    text: "Организация практик и трудоустройства студентов",
  },
  {
    icon: FourTrianglesIcon,
    text: "Организация учебного производства в колледже и разработка новых форм и практик в области кино, театра и других искусств",
  },
  {
    icon: ThreeCirclesIcon,
    text: "Формирование дополнительного дохода для студентов и развития колледжа",
  },
];

const accordionItems: AccordionItem[] = [
  {
    title: "Актерское агентство",
    description:
      "Актерское агентство для молодых актеров (15–22 лет) — запись актерских визиток и самопроб, подготовка фото и видео портфолио. Помощь в разборе и воплощении роли при утверждении в кино, юридическое сопровождение, работа с карьерной траекторией (важность разнообразия ролей, жанров, рынков), обучение новым навыкам.",
  },
  {
    title: "Агентство талантов",
    description:
      "Агентство талантов для всех специальностей кино — поиск и развитие профессионалов для индустрии.",
  },
  {
    title: "Учебный театр",
    description:
      "Постоянно действующий учебный театр — спектакли студентов и выпускников.",
  },
  {
    title: "Ко-продакшн с киноиндустрией",
    description:
      "Ко-продакшн с кинокомпаниями и продакшенами как практика для творческих команд студентов: совместное производство фильмов, сериалов, контента.",
  },
  {
    title: "Продакшн кино и видео",
    description:
      "Кино и видео продакшн — бэкстейджи с площадок, фильмы о фильме, интервью с создателями фильмов, создание афиш, плакатов, постеров, монтаж трейлеров, съемка спектаклей, концертов, фестивалей.",
  },
  {
    title: "Лаборатория спецэффектов",
    description:
      "Лаборатория спецэффектов — работа с технологиями volumetric, green screen, LED-экранами и программами 3D-моделирования. Эксперименты со старыми и новыми технологиями (stop-motion и комбинированная съемка). Создание вымышленных и труднодоступных локаций с последующим переносом в них отснятых персонажей.",
  },
  {
    title: "Музыкальный лейбл",
    description: "Музыкальный лейбл — производство и дистрибуция музыки.",
  },
  {
    title: "Киноэкспедиции",
    description:
      "Организация киноэкспедиций и проведение киноинтенсивов — обучающее производство фильмов для творческих подростков и молодых людей в регионах.",
  },
];

const ProdCenterPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.prodCenterPage}>
      <SplitSection
        title="Проектно-Продюсерский Центр"
        customClass={styles["custom-columns-template"]}
      >
        <p className={styles.description}>
          Проектно-продюсерский центр продвигает творческие проекты студентов и
          создает коридоры входа в индустрию для творческих команд. В рамках
          проектно-продюсерского центра для студентов организуется
          производственная практика в кинопродакшенах и театрах, а также
          трудоустройство и возможность компенсировать затраты на обучение,
          участвуя в работе продакшена внутри колледжа."
        </p>
      </SplitSection>

      <section className={styles.cardsSection}>
        <h2 className={styles.cardsTitle}>Цели центра:</h2>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.icon} className={styles.cardIcon} alt="" />
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.accordionSection}>
        <div className={styles.leftColumn}>
          <h2 className={styles.accordionTitle}>
            Части Проектно-Продюсерского Центра:
          </h2>
        </div>
        <div className={styles.accordion}>
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={classNames(styles.accordionItem, {
                [styles.active]: openIndex === index,
              })}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <img
                  src={ExpandIcon}
                  alt=""
                  className={classNames(styles.accordionIcon, {
                    [styles.active]: openIndex === index,
                  })}
                />
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProdCenterPage;
