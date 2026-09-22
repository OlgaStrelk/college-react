import React from "react";
import styles from "./FacultyIntro.module.scss";

interface FacultyProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FacultyIntro: React.FC<FacultyProps> = ({
  title,
  description,
  imageSrc,
}) => {
  const paragraphs = description.split("\n").filter((p) => p.trim() !== "");

  const renderParagraph = (text: string, index: number) => {
    const parts = text.split(/(\([^)]+\))/g);
    return (
      <p key={index} className={styles["faculty-description"]}>
        {parts.map((part, i) => {
          if (part.startsWith("(") && part.endsWith(")")) {
            return (
              <span key={i} className={styles["parentheses-text"]}>
                {part}
              </span>
            );
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <div className={styles["faculty-container"]}>
      <div className={styles["content"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <hr className={styles["full-width-line"]} />
        <div className={styles["details"]}>
          <img src={imageSrc} alt={title} className={styles["faculty-image"]} />
          <div className={styles["text-container"]}>
            {paragraphs.map(renderParagraph)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyIntro;
