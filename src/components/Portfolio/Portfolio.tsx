import React, { useState } from "react";
import styles from "./Portfolio.module.scss";
import { SidebarMenu } from "../../ui/SidebarMenu";
import {
  faculties,
  facultyContent,
  type FacultyName,
  type SectionData,
} from "../../assets/data/portfolioData";

interface SectionProps {
  data: SectionData;
}

const Section: React.FC<SectionProps> = ({ data }) => {
  const renderDescription = (desc: string) => {
    if (!desc) return null;
    const parts = desc.split("\n");
    return (
      <div className={styles["portfolio__section-description"]}>
        {parts.map((part, index) => (
          <p
            key={index}
            className={
              index === 0
                ? `${styles["text-color-main"]}`
                : `${styles["text-color-secondary"]}`
            }
          >
            {part.trim()}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className={styles["portfolio__section"]}>
      <div className={styles["portfolio__section-heading"]}>
        <p className={styles["portfolio__section-heading-text"]}>
          {data.title}
        </p>
      </div>
      {data.description && renderDescription(data.description)}
      {data.items && (
        <div className={styles["portfolio__section-list"]}>
          {data.items.map((item, index) => (
            <p key={index} className={styles["portfolio__section-item"]}>
              <span className={styles["portfolio__section-item-text"]}>
                {item}
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] =
    useState<FacultyName>("Для Актера");

  const handleFacultyChange = (id: FacultyName) => {
    setSelectedFaculty(id);
  };

  const currentContent = facultyContent[selectedFaculty];

  return (
    <div className={styles.portfolio}>
      <SidebarMenu<FacultyName>
        title="Состав портфолио:"
        items={faculties}
        selectedItem={selectedFaculty}
        onItemChange={handleFacultyChange}
      />
      <div className={styles["portfolio__content"]}>
        <div className={styles["portfolio__section-header"]}>
          <div className={styles["portfolio__section-title"]}>
            {currentContent.title}
          </div>
        </div>
        <div className={styles["portfolio__sections"]}>
          {currentContent.sections.map((sectionData, index) => (
            <Section key={index} data={sectionData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
