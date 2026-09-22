import React from "react";
import styles from "./Admission.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import WhiteLink from "../../assets/icons/link_white.svg?react";
import { StepItem } from "../../ui/StepItem";
import { CONTACTS } from "../../config/contacts";

interface AdmissionStep {
  label: string;
  date: Array<{ text: string; isBold?: boolean }>;
  showSeparator: boolean;
}

interface AdmissionData {
  title: string;
  description: string;
  additionalRecruitmentHeading: string;
  additionalRecruitmentPositions: string[];
  portfolioPeriodText: string;
  linkText: string;
  linkUrl: string;
  steps: AdmissionStep[];
  note: string[];
  buttonText: string;
  callCenterInfo: string[];
  consultationInfo: string;
}

const admission: AdmissionData = {
  title: "ПОСТУПЛЕНИЕ",
  description:
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
  buttonText: "Подробнее о поступлении",
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

const Admission: React.FC = () => (
  <section className={styles.admission} id="admission">
    <div className={styles["admission-container"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["main-content"]}>
          <h1 className={styles["font-h1"]}>{admission.title}</h1>
          <div className={styles.description}>
            <span>{admission.description}</span>
            <br />
            <br />
            <span>
              <strong>{admission.additionalRecruitmentHeading}</strong>
              <br />
              {admission.additionalRecruitmentPositions.map((position, index) => (
                <React.Fragment key={index}>
                  {position}
                  <br />
                </React.Fragment>
              ))}
            </span>
            <br />
            <span>
              {admission.portfolioPeriodText}
              <a
                href={admission.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {admission.linkText}
              </a>
            </span>
            <br />
            <br />
            <div
              className={styles.consultation}
              dangerouslySetInnerHTML={{ __html: admission.consultationInfo }}
            />
            <br />
            <div
              className={styles.callCenter}
              dangerouslySetInnerHTML={{
                __html: admission.callCenterInfo
                  .map((line, index) => {
                    if (index === 3) return '';
                    return index === 2
                      ? `${line}<a href="${CONTACTS.phoneHref}" class="${styles.link}">${admission.callCenterInfo[3]}</a>`
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
          </div>
        </div>
        <div className={styles["sidebar-content"]}>
          {admission.steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}
          <div
            className={styles["font-l"]}
            dangerouslySetInnerHTML={{ __html: admission.note.join("<br />") }}
          />
        </div>
      </div>
      <LinkButton
        variant="default"
        size="lg"
        icon={WhiteLink}
        href="/admission"
      >
        {admission.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default Admission;