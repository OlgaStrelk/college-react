import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TeachersPage.module.scss";
import { SidebarMenu } from "../ui/SidebarMenu";
import { TeacherCard } from "../ui/TeacherCard";
import { teachersData, type Teacher } from "../assets/data/teachersData";
import { TeacherPopup } from "../components/TeacherPopup";

type FacultyId = "all" | "acting" | "cinema" | "general" | "prodcenter";
interface FacultyMenuItem {
  id: FacultyId;
  title: string;
}
const menuItems: FacultyMenuItem[] = [
  { id: "all", title: "Все" },
  { id: "acting", title: "Актёрский факультет" },
  { id: "cinema", title: "Кинофакультет" },
  { id: "general", title: "Общее образование" },
  { id: "prodcenter", title: "Проектно-продюсерский центр" },
];

const facultyOrder: FacultyId[] = ["cinema", "acting", "general", "prodcenter"];

const TeachersPage: React.FC = () => {
  const { facultyId } = useParams<{ facultyId?: FacultyId }>();
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyId>(
    facultyId || "all",
  );
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    if (facultyId && menuItems.some((item) => item.id === facultyId)) {
      setSelectedFaculty(facultyId);
    } else {
      setSelectedFaculty("all");
    }
  }, [facultyId]);

  const handleFacultyChange = (facultyId: FacultyId) => {
    setSelectedFaculty(facultyId);
    const newPath =
      facultyId === "all" ? "/teachers/" : `/teachers/${facultyId}`;
    window.history.pushState({}, "", newPath);
  };

  useEffect(() => {
    if (selectedTeacher) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedTeacher]);

  const filteredTeachers =
    selectedFaculty === "all"
      ? teachersData
      : (teachersData.filter(
          (teacher) => teacher.faculty === selectedFaculty,
        ) as Teacher[]);

  const groupedTeachers =
    selectedFaculty === "all"
      ? facultyOrder
          .map((faculty) => ({
            faculty,
            title: menuItems.find((item) => item.id === faculty)?.title || "",
            teachers: teachersData.filter(
              (teacher) => teacher.faculty === faculty,
            ) as Teacher[],
          }))
          .filter((group) => group.teachers.length > 0)
      : ([
          {
            faculty: selectedFaculty,
            title:
              menuItems.find((item) => item.id === selectedFaculty)?.title ||
              "",
            teachers: filteredTeachers,
          },
        ] as { faculty: FacultyId; title: string; teachers: Teacher[] }[]);

  return (
    <div className={styles.container}>
      <SidebarMenu<FacultyId>
        title="Педагоги и сотрудники"
        items={menuItems}
        selectedItem={selectedFaculty}
        onItemChange={handleFacultyChange}
      />
      <div className={styles.content}>
        {groupedTeachers.map((group) => (
          <div key={group.faculty} className={styles.facultySection}>
            <h2 className={styles.title}>{group.title}</h2>
            <hr className={styles.divider} />
            <div className={styles.cards}>
              {group.teachers.map((teacher) => (
                <TeacherCard
                  key={teacher.name}
                  teacher={teacher}
                  onClick={() => setSelectedTeacher(teacher)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedTeacher && (
        <TeacherPopup
          teacher={selectedTeacher}
          handleClose={() => setSelectedTeacher(null)}
        />
      )}
    </div>
  );
};

export default TeachersPage;
