import React, { useEffect, useState } from "react";
import styles from "./TabBox.module.scss";

interface TabBoxProps<
  T extends { id: string; title: string; backgroundImage?: string },
> {
  items: T[];
  defaultItemId?: string;
  children: (activeItem: T) => React.ReactNode;
}

const TabBox = <
  T extends { id: string; title: string; backgroundImage?: string },
>({
  items,
  defaultItemId,
  children,
}: TabBoxProps<T>) => {
  const [activeItemId, setActiveItemId] = useState(
    defaultItemId && items.some((item) => item.id === defaultItemId)
      ? defaultItemId
      : items[0]?.id,
  );
  const activeItem = items.find((item) => item.id === activeItemId) || items[0];
  const backgroundClassname =
    activeItem.id === items[items.length - 1].id
      ? styles["tab-background"]
      : styles["tab-background"];

  useEffect(() => {
    items.forEach((item) => {
      if (item.backgroundImage) {
        const img = new Image();
        img.src = item.backgroundImage;
      }
    });
  }, [items]);

  if (!items.length) {
    return <div className={styles.error}>Нет предоставленных элементов</div>;
  }

  return (
    <div className={styles.container}>
      {activeItem.backgroundImage && (
        <img
          className={backgroundClassname}
          alt="Фон вкладки"
          src={activeItem.backgroundImage}
        />
      )}
      <div className={styles["tab-nav"]} data-active={activeItemId}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`${styles["tab-button"]} ${
              activeItemId === item.id ? styles.active : ""
            }`}
            onClick={() => setActiveItemId(item.id)}
          >
            <span className={styles["tab-button-text"]}>
              {item.title}
            </span>
          </button>
        ))}
      </div>
      <div className={styles["tab-content"]}>{children(activeItem)}</div>
    </div>
  );
};

export default TabBox;
