import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import DocumentIcon from "../../assets/icons/document.svg";
import ExpandIcon from "../../assets/icons/arrow-down.svg";
import { documents } from "../../assets/data/documentsData";

interface FileItem {
  display: string;
  file: string;
}

interface SubDocument {
  name: string;
  files: FileItem[];
}

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );
  const [openSubAccordionIndices, setOpenSubAccordionIndices] = useState<
    number[]
  >([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setOpenAccordionIndex(null);
        setOpenSubAccordionIndices([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
    if (openAccordionIndex !== index) {
      setOpenSubAccordionIndices([]);
    }
  };

  const toggleSubAccordion = (subIndex: number) => {
    setOpenSubAccordionIndices((prev) =>
      prev.includes(subIndex)
        ? prev.filter((i) => i !== subIndex)
        : [...prev, subIndex],
    );
  };

  return (
    <div
      className={`${styles["dropdown-container"]} ${isDropdownOpen ? styles["is-open"] : ""}`}
      ref={dropdownRef}
    >
      <div
        className={styles["dropdown-toggle"]}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className={styles["document-icon-container"]}>
          <img src={DocumentIcon} alt="Иконка документы" />
        </div>
        <div className={styles["dropdown-title"]}>
          Документы и сведения <br />
          об образовательной организации
        </div>
        <img
          src={ExpandIcon}
          alt=""
          className={`${styles["expand-icon"]} ${isDropdownOpen ? styles["rotate-icon"] : ""}`}
        />
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          {documents.map((doc, index) => (
            <div key={index} className={styles["accordion-item"]}>
              <div
                className={styles["accordion-title"]}
                onClick={() => toggleAccordion(index)}
              >
                {doc.name}
                <img
                  src={ExpandIcon}
                  alt=""
                  className={`${styles["accordion-icon"]} ${
                    openAccordionIndex === index ? styles["rotate-icon"] : ""
                  }`}
                />
              </div>
              {openAccordionIndex === index && (
                <div className={styles["accordion-content"]}>
                  {Array.isArray(doc.files) &&
                  doc.files.every((item) => "display" in item && "file" in item)
                    ? doc.files.map((item, fileIndex) => (
                        <a
                          key={fileIndex}
                          href={`/docs/${item.file}`}
                          className={styles["dropdown-item"]}
                          download={item.display}
                        >
                          {item.display}
                          <span className={styles.icon}>
                            <i className="fas fa-link"></i>
                          </span>
                        </a>
                      ))
                    : (doc.files as SubDocument[]).map((subDoc, subIndex) => (
                        <div key={subIndex} className={styles["sub-accordion"]}>
                          <div
                            className={styles["sub-accordion-title"]}
                            onClick={() => toggleSubAccordion(subIndex)}
                          >
                            {subDoc.name}
                            <img
                              src={ExpandIcon}
                              alt=""
                              className={`${styles["accordion-icon"]} ${
                                openSubAccordionIndices.includes(subIndex)
                                  ? styles["rotate-icon"]
                                  : ""
                              }`}
                            />
                          </div>
                          {openSubAccordionIndices.includes(subIndex) && (
                            <div className={styles["sub-accordion-content"]}>
                              {subDoc.files.map((item, fileIndex) => (
                                <a
                                  key={fileIndex}
                                  href={`/docs/${item.file}`}
                                  className={styles["dropdown-item"]}
                                  download={item.display}
                                >
                                  {item.display}
                                  <span className={styles.icon}>
                                    <i className="fas fa-link"></i>
                                  </span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
