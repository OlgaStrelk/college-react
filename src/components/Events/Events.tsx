import React from "react";
import styles from "./Events.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import WhiteLink from "../../assets/icons/link_white.svg?react";

interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface EventsData {
  sectionTitle: string;
  events: Event[];
  buttonText: string;
  buttonUrl: string;
}

const events: EventsData = {
  sectionTitle: "События",
  events: [
    {
      id: 1,
      title: "Название события",
      description:
        "Описание события события Описание события события Описание события события Описание события события Описание события события",
      imageUrl: "https://c.animaapp.com/mcizknm8BdXz1O/img/image.svg",
    },
    {
      id: 2,
      title: "Название события",
      description:
        "Описание события события Описание события события Описание события события Описание события события Описание события события",
      imageUrl: "https://c.animaapp.com/mcizknm8BdXz1O/img/image.svg",
    },
    {
      id: 3,
      title: "Название события",
      description:
        "Описание события события Описание события события Описание события события Описание события события Описание события события",
      imageUrl: "https://c.animaapp.com/mcizknm8BdXz1O/img/image.svg",
    },
  ],
  buttonText: "Все события",
  buttonUrl: "/events",
};
const Events: React.FC = () => (
  <section className={styles.events}>
    <h2>{events.sectionTitle}</h2>
    <div className={styles["events-grid"]}>
      {events.events.map((event) => (
        <div key={event.id} className={styles["event-card"]}>
          <img
            src={event.imageUrl}
            alt="Фото события"
            className={styles["event-image"]}
          />
          <div className={styles["event-content"]}>
            <h3 className={styles["event-title"]}>{event.title}</h3>
            <p className={styles["event-description"]}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className={styles["all-events-btn"]}>
      <LinkButton
        variant="default"
        size="md"
        icon={WhiteLink}
        href={events.buttonUrl}
      >
        {events.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default Events;
