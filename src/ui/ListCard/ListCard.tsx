import React from "react";
import styles from "./ListCard.module.scss";
import classNames from "classnames";

interface Lab {
  title: string;
  instructor?: string;
}

interface CardProps {
  title: string;
  list: string[] | { [key: string]: string[] } | Lab[];
  customClassName?: string;
}

const ListCard: React.FC<CardProps> = ({ title, list, customClassName }) => {
  return (
    <div className={classNames(styles["card-content"], customClassName)}>
      <h3>{title}</h3>
      {Array.isArray(list) ? (
        <ul>
          {list.map((item, index) =>
            typeof item === "string" ? (
              <li key={index}>{item}</li>
            ) : (
              <li key={index}>
                {item.title}
                {item.instructor && (
                  <span className={styles.instructor}>
                    &nbsp;({item.instructor})
                  </span>
                )}
              </li>
            ),
          )}
        </ul>
      ) : (
        <div className={styles["two-column"]}>
          {Object.keys(list).map((category, index) => (
            <div key={index} className={styles["column"]}>
              <h4>{category}</h4>
              <ul>
                {list[category].map((subject, subIndex) => (
                  <li key={subIndex}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCard;
