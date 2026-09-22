import { useState, useRef, useEffect } from "react";
import styles from "./SidebarMenu.module.scss";
import ExpandIcon from "../../assets/icons/arrow-down.svg";

interface MenuItem<T> {
  id: T;
  title: string;
}

interface SidebarMenuProps<T> {
  title: string;
  items: MenuItem<T>[];
  selectedItem: T;
  onItemChange: (id: T) => void;
}

const SidebarMenu = <T extends string | number>({
  title,
  items,
  selectedItem,
  onItemChange,
}: SidebarMenuProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedTitle =
    items.find((item) => item.id === selectedItem)?.title || items[0]?.title;

  const handleSelect = (id: T) => {
    onItemChange(id);
    setIsOpen(false);
  };

  return (
    <div className={styles.menu}>
      <h1 className={styles["menu-title"]}>{title}</h1>
      <div className={styles["menu-list"]}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`${styles["menu-item"]} ${selectedItem === item.id ? styles.active : ""}`}
            onClick={() => onItemChange(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <h1 className={styles["mobile-menu-title"]}>{title}</h1>
      <div
        className={`${styles["dropdown-container"]} ${isOpen ? styles["is-open"] : ""}`}
        ref={dropdownRef}
      >
        <div
          className={styles["dropdown-toggle"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles["dropdown-title"]}>{selectedTitle}</div>
          <img
            src={ExpandIcon}
            alt=""
            className={`${styles["expand-icon"]} ${isOpen ? styles["rotate-icon"] : ""}`}
          />
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            {items.map((item) => (
              <div
                key={item.id}
                className={`${styles["dropdown-item"]} ${selectedItem === item.id ? styles.active : ""}`}
                onClick={() => handleSelect(item.id)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;