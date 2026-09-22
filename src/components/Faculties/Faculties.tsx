import React from "react";

import styles from "./Faculties.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import Link from "../../assets/icons/link.svg?react";
import {
  Actors,
  Cinema,
  General,
  MobActors,
  MobCinema,
  MobGeneral,
} from "../../assets/images/faculties";
import { TabBox } from "../../ui/TabBox";

interface FacultyContent {
  id: string;
  title: string;
  description: string;
  linkUrl: string;
  backgroundImage: string;
  mobileBackgroundImage: string;
}

const typedFaculties: FacultyContent[] = [
  {
    id: "acting",
    title: "Актёрский факультет",
    description:
      "Актёрский факультет сочетает прохождение классической театральной школы, погружение в специфику кино и освоение методов преподавания актёрского мастерства. Подготовка актёров, способных работать в киноиндустрии, на телевидении, в современных цифровых форматах (сериалы, веб-проекты), театре, образовании, психологии, арт-терапии.",
    linkUrl: "/faculties/actors",
    backgroundImage: Actors,
    mobileBackgroundImage: MobActors,
  },
  {
    id: "film",
    title: "Кинофакультет",
    description:
      "Кинофакультет готовит профессионалов киноиндустрии, способных создавать кинопроекты разных жанров и масштабов. В программе факультета — изучение выразительных средств кино, исследование языка кино, освоение современных технологий кинопроизводства, изучение профессии в одной из пяти мастерских, работа над кинопроектами в творческих командах, производственная практика в кинопродакшенах.",
    linkUrl: "/faculties/film",
    backgroundImage: Cinema,
    mobileBackgroundImage: MobCinema,
  },
  {
    id: "general",
    title: "Общее образование",
    description:
      "Особенности образовательной системы Нового Киноколледжа — углублённое преподавание гуманитарных предметов: истории искусств (изобразительного искусства, музыки, театра, кино), философии, психологии, истории религий; развитие учебных навыков; психологическая подготовка к творческой профессии (навыки рефлексии, работы с эмоциями и чувствами); практика в социальных проектах и экспедициях.",
    linkUrl: "/faculties/general",
    backgroundImage: General,
    mobileBackgroundImage: MobGeneral,
  },
];

const Faculties: React.FC = () => {
  return (
    <section className={styles["faculty-section"]} id="faculties">
      <TabBox items={typedFaculties} defaultItemId="acting">
        {(activeFaculty: FacultyContent) => (
          <>
            <img
              src={activeFaculty.mobileBackgroundImage}
              alt="Фон факультета"
              className={styles["mobile-bg"]}
            />
            <div className={styles.overlay} />
            <p className={styles.description}>{activeFaculty.description}</p>
            <LinkButton
              customClass={styles["more-button"]}
              variant="simple"
              size="lg"
              href={activeFaculty.linkUrl}
              icon={Link}
            >
              Подробнее о факультете
            </LinkButton>
          </>
        )}
      </TabBox>
    </section>
  );
};

export default Faculties;
