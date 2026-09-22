import React from "react";
import styles from "./Entrance.module.scss";
import lineSvg from "../assets/icons/line-1.svg";
import { StyledCard } from "../ui/StyledCard";
import { CardsGrid } from "../ui/CardsGrid";
import { Portfolio } from "../components/Portfolio";
import { StepItem } from "../ui/StepItem";
import { SplitSection } from "../ui/SplitSection";
import { CONTACTS } from "../config/contacts";

interface EntranceStep {
  label: string;
  date: Array<{ text: string; isBold?: boolean }>;
  showSeparator: boolean;
}

interface EntranceData {
  title: string | React.ReactNode;
  descriptionStart: string;
  additionalRecruitmentHeading: string;
  additionalRecruitmentPositions: string[];
  portfolioPeriodText: string;
  linkText: string;
  linkUrl: string;
  steps: EntranceStep[];
  note: string[];
  callCenterInfo: string[];
  consultationInfo: string;
}

const entranceData: EntranceData = {
  title: "ПОСТУПЛЕНИЕ",
  descriptionStart:
    "Уважаемые абитуриенты и родители! ",
  additionalRecruitmentHeading: "Дополнительный набор в мастерские:",
  additionalRecruitmentPositions: [
    "Звукорежиссёр (2 места)",
    "Оператор (2 места)",
    "Режиссёр монтажа (2 места)",
    "Сценарист (1 место)",
  ],
  portfolioPeriodText: "Подача портфолио - с 18 августа по 5 сентября: ",
  linkText: "ссылке",
  linkUrl: CONTACTS.portfolioForm,
  steps: [
    {
      label: "Даты 1 этапа вступительных испытаний (конкурс портфолио)",
      date: [
        { text: "1 поток", isBold: true },
        {
          text: "Прием портфолио - с 20 апреля по 25 мая 2026",
        },
        { text: "Списки прошедших на очные испытания - 1 июня 2026" },
        { text: "2 поток", isBold: true },
        {
          text: "Прием портфолио - 3 по 20 июня 2026",
        },
        { text: "Списки прошедших на очные испытания  - 26 июня 2026" },
        { text: "3 поток", isBold: true },
        {
          text: "Прием портфолио - с 1 по 29 июля 2026",
        },
        { text: "Списки прошедших на очные испытания - 3 августа 2026" },
      ],
      showSeparator: true,
    },
    {
      label: "2 этап вступительных испытаний (очный): ",
      date: [{ text: "29-30 июня" }, { text: "и 1-2 июля 2026" }],
      showSeparator: true,
    },
    {
      label: "2 этап вступительных испытаний для 3 потока (очный): ",
      date: [
        { text: "Все мастерские, кроме мастерской «Оператор» - 6 и 7 августа" },
        {
          text: "Очные испытания для мастерской «Оператор» - 16 и 17 августа",
        },
      ],
      showSeparator: false,
    },
  ],
  note: [
    "Если абитуриент планирует поступать в несколько мастерских сразу, необходимо заполнить отдельные анкеты и прикрепить портфолио для каждой мастерской.",
    "Перед отправкой анкеты с портфолио убедитесь, что задания выполнены в соответствии с требованиями, а ссылка на портфолио открывается и настроена на «доступ всем, у кого есть ссылка».",
    "Ждем ваших заявок!",
  ],
  callCenterInfo: [
    "Открываем колл-центр приемной комиссии НК",
    "Можно позвонить и задать уточняющие вопросы по набору.",
    "Телефон приемной комиссии: ",
    CONTACTS.phone,
    "В мае и июне колл-центр будет работать по вторникам и четвергам, с 13.00 до 16.00",
  ],
  consultationInfo:
    '<a class="link" href="/docs/spisok_dopuschennyh_k_ochnym_ispytaniyam_29_30_.pdf" target="_blank" rel="noopener noreferrer">Общий список допущенных к очным испытаниям 29-30 июня (1 и 2 поток)</a>' +
    '<br /><br />' +
    '<a class="link" href="/docs/itogi_1_tura_3_potoka.pdf" target="_blank" rel="noopener noreferrer">Список допущенных к очным испытаниям 3 потока (итоги 1 тура)</a>' +
    '<br /><br />' +
    '<a class="link" href="/docs/spisok_abiturientov_1_i_2_potoka_rekomendovannyh_k_zachisleniyu.pdf" target="_blank" rel="noopener noreferrer">Список абитуриентов 1 и 2 потока, рекомендованных к зачислению</a>',
};

const faculties = [
  { title: "Актёр", places: 35, icon: "icon1" },
  { title: "Сценарист", places: 15, icon: "icon2" },
  { title: "Режиссёр", places: 15, icon: "icon3" },
  { title: "Режиссёр монтажа", places: 15, icon: "icon4" },
  { title: "Звукорежиссёр", places: 10, icon: "icon5" },
  { title: "Оператор", places: 15, icon: "icon6" },
];

const costs = [
  {
    price: "420.000₽",
    period: "/в год",
    description: "Полная стоимость обучения",
  },
  {
    description:
      "Также существуют стипендиальные (бесплатные) места — пока их несколько, точное количество будет опубликовано в августе",
  },
];

const Entrance: React.FC = () => (
  <>
    <SplitSection
      title={entranceData.title}
      description={
        <>
          <span>{entranceData.descriptionStart}</span>

          <br />
          <br />
          <span>
            <strong>{entranceData.additionalRecruitmentHeading}</strong>
            <br />
            {entranceData.additionalRecruitmentPositions.map((position, index) => (
              <React.Fragment key={index}>
                {position}
                <br />
              </React.Fragment>
            ))}
          </span>
          <br />
          <span>
            {entranceData.portfolioPeriodText}
            <a
              href={entranceData.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {entranceData.linkText}
            </a>
          </span>
          <br />
          <br />
          <div
            className={styles.consultation}
            dangerouslySetInnerHTML={{ __html: entranceData.consultationInfo }}
          />
          <br />
          <div
            className={styles.callCenter}
            dangerouslySetInnerHTML={{
              __html: entranceData.callCenterInfo
                .map((line, index) => {
                  if (index === 3) return '';
                  return index === 2
                    ? `${line}<a href="${CONTACTS.phoneHref}" class="${styles.link}">${entranceData.callCenterInfo[3]}</a>`
                    : line;
                })
                .join("<br />"),
            }}
          />
          <br />
          <a
            href="/docs/pravila_priema_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Правила приёма 2026
          </a>
        </>
      }
    >
      {entranceData.steps.map((step, index) => (
        <React.Fragment key={index}>
          <StepItem {...step} date={step.date} />
        </React.Fragment>
      ))}
      <div
        className={styles.flexcontainer}
        dangerouslySetInnerHTML={{
          __html: entranceData.note.join("<br />"),
        }}
      />
    </SplitSection>

    <div className={styles.classes}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionTitle}>
          Количество мест <br />
          на 1 курсе в Новом Киноколледже по мастерским:
        </p>
      </div>
      <CardsGrid>
        {faculties.map((faculty) => (
          <div className={styles["card-container"]} key={faculty.title}>
            <StyledCard title={faculty.title} icon={faculty.icon}>
              <span className={styles.places}>{faculty.places}</span>
              <img className={styles.line} src={lineSvg} alt="Разделитель" />
              <span className={styles.facultyTitle}>{faculty.title}</span>
            </StyledCard>
          </div>
        ))}
      </CardsGrid>
    </div>

    <div className={styles.classes}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>Стоимость обучения:</div>
      </div>
      <div className={styles.frame}>
        {costs.map((cost, index) => (
          <div
            key={index}
            className={
              cost.price ? styles.frameWrapper : styles["only-text-card"]
            }
          >
            {cost.price ? (
              <div className={styles.frame2}>
                <div className={styles.frame3}>
                  <div className={styles.textWrapper14}>{cost.price}</div>
                  <div className={styles.textWrapper15}>{cost.period}</div>
                </div>
                <div className={styles.textWrapper16}>{cost.description}</div>
              </div>
            ) : (
              <div className={styles.frame4}>
                <p className={styles.textWrapper17}>{cost.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <Portfolio />
  </>
);

export default Entrance;