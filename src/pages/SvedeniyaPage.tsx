import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SvedeniyaPage.module.scss";
import { SidebarMenu } from "../ui/SidebarMenu";
import { documents } from "../assets/data/documentsData";
import { teachersData } from "../assets/data/teachersData";
import { CONTACTS } from "../config/contacts";

const SvedeniyaPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedSection, setSelectedSection] = useState<string>(
        documents[0].name,
    );

    useEffect(() => {
        const sectionFromUrl = searchParams.get("section");
        if (sectionFromUrl && documents.some((d) => d.name === sectionFromUrl)) {
            setSelectedSection(sectionFromUrl);
        }
    }, [searchParams]);

    const menuItems = documents.map((doc) => ({
        id: doc.name,
        title: doc.name,
    }));

    const handleSectionChange = (name: string) => {
        setSelectedSection(name);
        setSearchParams({ section: name });
    };

    const currentDoc = documents.find((d) => d.name === selectedSection)!;

    // ==================== RICH КОНТЕНТ ДЛЯ РАЗДЕЛОВ ====================
    const renderSectionContent = () => {
        switch (selectedSection) {
            case "Основные сведения":
                return (
                    <>
                        <div className={styles.infoBlock}>
                            <h2>Лицензия на осуществление образовательной деятельности</h2>
                            <dl className={styles.infoList}>
                                <dt>Статус лицензии</dt>
                                <dd>Действует</dd>
                                <dt>Регистрационный номер</dt>
                                <dd>№ Л035-01298-77/03900825</dd>
                                <dt>Дата предоставления</dt>
                                <dd>03.12.2025</dd>
                                <dt>Полное наименование</dt>
                                <dd>
                                    АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ПРОФЕССИОНАЛЬНАЯ ОБРАЗОВАТЕЛЬНАЯ
                                    ОРГАНИЗАЦИЯ «НОВЫЙ КИНОКОЛЛЕДЖ»
                                </dd>
                                <dt>Адрес осуществления деятельности</dt>
                                <dd>{CONTACTS.addressFull}</dd>
                                <dt>ИНН</dt>
                                <dd>9728153383</dd>
                            </dl>
                        </div>
                        <p className={styles.note}>
                            Заключение СанПин также размещено в разделе.
                        </p>
                    </>
                );

            case "Документы":
                return (
                    <>
                        <div className={styles.infoBlock}>
                            <h2>Учредительные документы</h2>
                            <p>
                                Автономная некоммерческая профессиональная образовательная
                                организация «Новый Киноколледж» действует на основании Устава,
                                утверждённого Общим собранием учредителей.
                            </p>
                            <p>
                                Изменения в Устав утверждаются Управляющим советом и подлежат
                                государственной регистрации в порядке, установленном
                                законодательством РФ.
                            </p>
                            <ul className={styles.fileList} style={{ marginTop: "16px" }}>
                                <li>
                                    <a href="/docs/ustav.pdf" target="_blank" rel="noopener noreferrer" className={styles.fileLink}>
                                        Устав
                                    </a>
                                </li>
                                <li>
                                    <a href="/docs/vypiska_iz_egryul.pdf" target="_blank" rel="noopener noreferrer" className={styles.fileLink}>
                                        Выписка из ЕГРЮЛ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.infoBlock}>
                            <h2>Кодекс профессиональной этики</h2>
                            <ul className={styles.fileList}>
                                <li>
                                    <a href="/docs/kodeks_professionalnoy_etiki.pdf" target="_blank" rel="noopener noreferrer" className={styles.fileLink}>
                                        Кодекс профессиональной этики АНПОО «Новый Киноколледж»
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.infoBlock}>
                            <h2 style={{ fontSize: "18px", lineHeight: "1.4" }}>
                                Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчёты об исполнении таких предписаний
                            </h2>
                            <p className={styles.note}>
                                До подтверждения органом, осуществляющим государственный контроль (надзор) в сфере образования, исполнения предписания или признания его недействительным в установленном законом порядке
                            </p>
                            <ul className={styles.fileList} style={{ marginTop: "16px" }}>
                                <li>
                                    <a href="/docs/akt_anpoo_novyy_kinokolledzh.pdf" target="_blank" rel="noopener noreferrer" className={styles.fileLink}>
                                        Акт АНПОО «Новый Киноколледж»
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
                );

            case "Образование":
                return (
                    <>
                        <div className={styles.infoBlock}>
                            <h2>
                                Основные образовательные программы среднего профессионального
                                образования
                            </h2>
                            <div className={styles.programGrid}>
                                <div className={styles.programCard}>
                                    <h3>52.02.04 Актерское искусство</h3>
                                    <p>
                                        <strong>Квалификация:</strong> Актер, преподаватель
                                    </p>
                                    <p>
                                        <strong>Срок обучения:</strong> 3 года 10 месяцев
                                    </p>
                                    <p>
                                        <strong>База поступления:</strong> основное общее
                                        образование
                                    </p>
                                </div>
                                <div className={styles.programCard}>
                                    <h3>55.02.03 Кино- и телепроизводство (по видам)</h3>
                                    <p>
                                        <strong>Квалификация:</strong> Специалист по кино- и
                                        телепроизводству
                                    </p>
                                    <p>
                                        <strong>Срок обучения:</strong> 3 года 10 месяцев
                                    </p>
                                    <p>
                                        <strong>База поступления:</strong> основное общее
                                        образование
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <h2>Дополнительное образование</h2>
                            <div className={styles.programGrid}>
                                <div className={styles.programCard}>
                                    <h3>Основы кинопроизводства</h3>
                                    <p>
                                        <strong>Уровень:</strong> базовый
                                    </p>
                                    <p>
                                        <strong>Возраст:</strong> 12–17 лет и взрослые от 18 лет
                                    </p>
                                    <p>
                                        <strong>Срок реализации:</strong> 1 учебный год (36 недель)
                                    </p>
                                    <p>
                                        <strong>Направленность:</strong> художественная
                                    </p>
                                </div>
                                <div className={styles.programCard}>
                                    <h3>Основы актёрского мастерства</h3>
                                    <p>
                                        <strong>Уровень:</strong> базовый
                                    </p>
                                    <p>
                                        <strong>Возраст:</strong> 12–17 лет и взрослые от 18 лет
                                    </p>
                                    <p>
                                        <strong>Срок реализации:</strong> 1 учебный год (36 недель)
                                    </p>
                                    <p>
                                        <strong>Направленность:</strong> художественная
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                );

            case "Правила приема":
                return (
                    <div className={styles.infoBlock}>
                        <h2>
                            Правила приема на обучение по образовательным программам среднего
                            профессионального образования в 2026 году
                        </h2>
                        <p>
                            Утверждены директором АНПОО «Новый Киноколледж» Керзиной О.А. 28
                            февраля 2026 г.
                        </p>
                        <p className={styles.note}>
                            Полный текст правил приёма (10 страниц) доступен для скачивания
                            ниже.
                        </p>
                    </div>
                );

            case "Образовательные стандарты и требования":
                return (
                    <div className={styles.infoBlock}>
                        <h2>Федеральные государственные образовательные стандарты</h2>
                        <div className={styles.standardsList}>
                            <div>
                                <strong>55.02.03 Кино- и телепроизводство (по видам)</strong>
                                <p>
                                    Приказ Министерства просвещения РФ от 11 декабря 2022 г. №
                                    1101
                                </p>
                            </div>
                            <div>
                                <strong>52.02.04 Актерское искусство</strong>
                                <p>
                                    Приказ Министерства образования и науки РФ от 27 октября 2014
                                    г. № 1359
                                </p>
                            </div>
                        </div>
                    </div>
                );

            case "Организация питания":
            { const nutritionItems = [
                    {
                        title: "Меню ежедневного горячего питания",
                        text: "Образовательная организация не реализует образовательные программы начального общего образования, поэтому в соответствии с п. 13. Постановления Правительства Российской Федерации от 20.10.2021 № 1802 «Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети „Интернет“ и обновления информации об образовательной организации, а также о признании утратившими силу некоторых актов и отдельных положений некоторых актов Правительства Российской Федерации» не публикует информацию по данному пункту",
                    },
                    {
                        title:
                            "Информация о наличии диетического меню в образовательной организации",
                        text: "Образовательная организация не реализует образовательные программы начального общего образования, поэтому в соответствии с п. 13. Постановления Правительства Российской Федерации от 20.10.2021 № 1802 «Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети „Интернет“ и обновления информации об образовательной организации, а также о признании утратившими силу некоторых актов и отдельных положений некоторых актов Правительства Российской Федерации» не публикует информацию по данному пункту",
                    },
                    {
                        title:
                            "Перечень юридических лиц и индивидуальных предпринимателей, поставляющих (реализующих) пищевые продукты и продовольственное сырье в общеобразовательные организации",
                        text: "Образовательная организация не реализует образовательные программы начального общего образования, поэтому в соответствии с п. 13. Постановления Правительства Российской Федерации от 20.10.2021 № 1802 «Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети „Интернет“ и обновления информации об образовательной организации, а также о признании утратившими силу некоторых актов и отдельных положений некоторых актов Правительства Российской Федерации» не публикует информацию по данному пункту",
                    },
                    {
                        title:
                            "Перечень юридических лиц и индивидуальных предпринимателей, оказывающих услуги по организации питания в общеобразовательной организациях",
                        text: "Образовательная организация не реализует образовательные программы начального общего образования, поэтому в соответствии с п. 13. Постановления Правительства Российской Федерации от 20.10.2021 № 1802 «Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети „Интернет“ и обновления информации об образовательной организации, а также о признании утратившими силу некоторых актов и отдельных положений некоторых актов Правительства Российской Федерации» не публикует информацию по данному пункту",
                    },
                    {
                        title:
                            "Формы обратной связи для родителей обучающихся и ответы на вопросы родителей по питанию",
                        text: "Образовательная организация не реализует образовательные программы начального общего образования, поэтому в соответствии с п. 13. Постановления Правительства Российской Федерации от 20.10.2021 № 1802 «Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети „Интернет“ и обновления информации об образовательной организации, а также о признании утратившими силу некоторых актов и отдельных положений некоторых актов Правительства Российской Федерации» не публикует информацию по данному пункту",
                    },
                ];
                return (
                    <div className={styles.infoBlock}>
                        {nutritionItems.map((item, index) => (
                            <div key={index} className={styles.nutritionItem}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                ); }

            case "Руководство. Педагогический состав сведения":
                return (
                    <div className={styles.infoBlock}>
                        <h2>Руководство и педагогический состав</h2>
                        <div className={styles.teacherGrid}>
                            {teachersData.map((teacher) => (
                                <div key={teacher.name} className={styles.teacherCard}>
                                    {teacher.image && (
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className={styles.teacherPhoto}
                                        />
                                    )}
                                    <div className={styles.teacherInfo}>
                                        <h3>{teacher.name}</h3>
                                        <p className={styles.role}>{teacher.role}</p>
                                        {teacher.education && (
                                            <p className={styles.education}>
                                                <strong>Образование:</strong> {teacher.education}
                                            </p>
                                        )}
                                        {teacher.additionalInfo && (
                                            <p className={styles.additional}>
                                                {teacher.additionalInfo}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    // ==================== ОТРИСОВКА ФАЙЛОВ (исправлено) ====================
    const renderFiles = (files: any[]) => {
        if (!files || files.length === 0) {
            return null;
        }

        // Вложенные подразделы (Образование)
        if (files.length > 0 && "name" in files[0]) {
            return files.map((sub: any) => (
                <div key={sub.name} className={styles.subsection}>
                    <h3 className={styles.subsectionTitle}>{sub.name}</h3>
                    <ul className={styles.fileList}>
                        {sub.files.map((file: any) => (
                            <li key={file.file}>
                                <a
                                    href={`/docs/${file.file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.fileLink}
                                >
                                    {file.display}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ));
        }

        // Обычный список файлов
        return (
            <ul className={styles.fileList}>
                {files.map((file: any) => (
                    <li key={file.file}>
                        <a
                            href={`/docs/${file.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.fileLink}
                        >
                            {file.display}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className={styles.container}>
            <SidebarMenu
                title="Сведения об образовательной организации"
                items={menuItems}
                selectedItem={selectedSection}
                onItemChange={handleSectionChange}
            />

            <div className={styles.content}>
                <h1 className={styles.pageTitle}>{currentDoc.name}</h1>

                {renderSectionContent()}

                {renderFiles(currentDoc.files)}
            </div>
        </div>
    );
};

export default SvedeniyaPage;
