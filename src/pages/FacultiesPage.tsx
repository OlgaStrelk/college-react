import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./FacultiesPage.module.scss";
import { FacultyIntro } from "../components/FacultyIntro";
import { CurriculumCards } from "../components/CurriculumCards";
import ActorFaculty from "../assets/images/faculties/page_faculties/actors.png";
import CinemaFaculty from "../assets/images/faculties/page_faculties/cinema.png";
import GeneralFaculty from "../assets/images/faculties/page_faculties/general.png";
import { CinemaLabs } from "../components/CinemaLabs";
import { FilmProgram } from "../components/FilmProgram";
import ActingProgram from "../components/ActingProgram/ActingProgram";
import { SidebarMenu } from "../ui/SidebarMenu";

type FacultyData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const facultiesData: FacultyData[] = [
  {
    id: "actors",
    title: "Актёрский факультет",
    description: `Актерский факультет сочетает прохождение классической театральной школы,  погружение в специфику кино и освоение методов преподавания актерского мастерства
Подготовка актеров, способных работать в киноиндустрии, на телевидении, в современных цифровых форматах (сериалы, веб-проекты), театре, образовании, психологии, арт-терапии.`,
    imageSrc: ActorFaculty,
  },
  {
    id: "cinema",
    title: "Кинофакультет",
    description: `Освоение современных техник и технологий (позиция мастера и ремесленника)
Продвижение проектов и творческих команд с помощью проектно-продюсерского центра (создание для творческих команд коридоров встраивания в киноиндустрию)
Производственные практики в кинопродакшенах (интеграция в киноиндустрию)
Творческое исследование языка и выразительных средств кинематографа, создание новых киноформ (позиция автора и исследователя)
Опыт создания кинопроектов при взаимодействии в творческих командах (умение работать в команде и соавторстве, организационные навыки)`,
    imageSrc: CinemaFaculty,
  },
  {
    id: "general",
    title: "Общее образование",
    description: `Особенности образовательной системы Нового Киноколледжа - углубленное преподавание гуманитарных предметов - история искусств (изо, музыка, театр) история кино, философия, психология, история религий итд; психологическая подготовка к творческой профессии (навыки рефлексии и работы с эмоциями и чувствами); практика в социальных проектах и экспедициях.`,
    imageSrc: GeneralFaculty,
  },
];

const FacultiesPage: React.FC = () => {
  const { facultyId } = useParams<{ facultyId?: string }>();
  const [selectedFaculty, setSelectedFaculty] = useState<string>(
    facultyId || facultiesData[0].id,
  );

  useEffect(() => {
    if (facultyId && facultiesData.some((f) => f.id === facultyId)) {
      setSelectedFaculty(facultyId);
    } else {
      setSelectedFaculty(facultiesData[0].id);
    }
  }, [facultyId]);

  const handleFacultyChange = (facultyId: string) => {
    setSelectedFaculty(facultyId);
    window.history.pushState({}, "", `/faculties/${facultyId}`);
  };

  const currentFaculty =
    facultiesData.find((f) => f.id === selectedFaculty) || facultiesData[0];

  return (
    <>
      <div className={styles.container}>
        <SidebarMenu
          title="Факультеты"
          items={facultiesData}
          selectedItem={selectedFaculty}
          onItemChange={handleFacultyChange}
        />
        <FacultyIntro
          title={currentFaculty.title}
          description={currentFaculty.description}
          imageSrc={currentFaculty.imageSrc}
        />
      </div>

      <CurriculumCards selectedFaculty={currentFaculty.title} />
      {currentFaculty.title === "Кинофакультет" && (
        <>
          <CinemaLabs /> <FilmProgram />
        </>
      )}
      {currentFaculty.title === "Актёрский факультет" && <ActingProgram />}
    </>
  );
};

export default FacultiesPage;
