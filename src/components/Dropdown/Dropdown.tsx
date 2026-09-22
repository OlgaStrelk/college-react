import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.scss";
import DocumentIcon from "../../assets/icons/document.svg";
import ExpandIcon from "../../assets/icons/arrow-down.svg";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/svedeniya");
  };

  return (
    <div className={styles["dropdown-container"]} onClick={handleClick}>
      <div className={styles["dropdown-toggle"]}>
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
          className={styles["expand-icon"]}
          style={{ transform: "rotate(-90deg)" }} // стрелка указывает вправо — как ссылка
        />
      </div>
    </div>
  );
};

export default Dropdown;