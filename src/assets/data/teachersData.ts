import Teacher01 from "../../assets/images/team_photo/teacher-01.png";
import Teacher02 from "../../assets/images/team_photo/teacher-02.png";
import Teacher03 from "../../assets/images/team_photo/teacher-03.png";
import Teacher04 from "../../assets/images/team_photo/teacher-04.png";
import Teacher05 from "../../assets/images/team_photo/teacher-05.png";
import Teacher06 from "../../assets/images/team_photo/teacher-06.png";
import Teacher07 from "../../assets/images/team_photo/teacher-07.png";
import Teacher08 from "../../assets/images/team_photo/teacher-08.png";
import Teacher09 from "../../assets/images/team_photo/teacher-09.png";
import Teacher10 from "../../assets/images/team_photo/teacher-10.png";
import Teacher11 from "../../assets/images/team_photo/teacher-11.png";
import Teacher12 from "../../assets/images/team_photo/teacher-12.png";
import Teacher13 from "../../assets/images/team_photo/teacher-13.png";
import Teacher14 from "../../assets/images/team_photo/teacher-14.png";
import Teacher15 from "../../assets/images/team_photo/teacher-15.png";
import Teacher16 from "../../assets/images/team_photo/teacher-16.png";
import Teacher17 from "../../assets/images/team_photo/teacher-17.png";
import Teacher18 from "../../assets/images/team_photo/teacher-18.png";
import Teacher19 from "../../assets/images/team_photo/teacher-19.png";
import Teacher20 from "../../assets/images/team_photo/teacher-20.png";
import Teacher21 from "../../assets/images/team_photo/teacher-21.png";
import Teacher22 from "../../assets/images/team_photo/teacher-22.png";
import Teacher23 from "../../assets/images/team_photo/teacher-23.png";
import Teacher24 from "../../assets/images/team_photo/teacher-24.png";
import Teacher25 from "../../assets/images/team_photo/teacher-25.png";
import Teacher26 from "../../assets/images/team_photo/teacher-26.png";
import Teacher27 from "../../assets/images/team_photo/teacher-27.png";
import Teacher28 from "../../assets/images/team_photo/teacher-28.png";
import Teacher29 from "../../assets/images/team_photo/teacher-29.png";
import Teacher30 from "../../assets/images/team_photo/teacher-30.png";
import Teacher31 from "../../assets/images/team_photo/teacher-31.png";

export interface Teacher {
  name: string;
  role: string;
  image?: string;
  faculty: "cinema" | "acting" | "general" | "prodcenter";
  education?: string;
  additionalInfo?: string;
}

export const teachersData: Teacher[] = [
  {
    name: "Анна Светлова",
    role: "Руководитель кинофакультета, педагог по режиссуре",
    image: Teacher01,
    faculty: "cinema",
    education: "ВГИК, режиссёрский факультет",
  },
  {
    name: "Борис Ковалёв",
    role: "Руководитель мастерской «Режиссёр»",
    image: Teacher02,
    faculty: "cinema",
    education: "ГИТИС, актёрский факультет",
  },
  {
    name: "Вера Нестерова",
    role: "Руководитель мастерской «Сценарист»",
    image: Teacher03,
    faculty: "cinema",
    education: "МГУ, филологический факультет",
  },
  {
    name: "Глеб Орлов",
    role: "Руководитель мастерской «Кинооператор»",
    image: Teacher04,
    faculty: "cinema",
    education: "Школа-студия МХАТ",
  },
  {
    name: "Дарья Лунина",
    role: "Руководитель мастерской «Звукорежиссёр»",
    image: Teacher05,
    faculty: "cinema",
    education: "ВГИК, операторский факультет",
  },
  {
    name: "Егор Мельников",
    role: "Педагог по монтажу",
    image: Teacher06,
    faculty: "cinema",
    education: "СПбГИКиТ, продюсерский факультет",
  },
  {
    name: "Жанна Белова",
    role: "Руководитель актёрского факультета",
    image: Teacher07,
    faculty: "acting",
    education: "ВГИК, режиссёрский факультет",
  },
  {
    name: "Иван Северов",
    role: "Педагог по актёрскому мастерству",
    image: Teacher08,
    faculty: "acting",
    education: "ГИТИС, актёрский факультет",
  },
  {
    name: "Ксения Рощина",
    role: "Педагог по сценической речи",
    image: Teacher09,
    faculty: "acting",
    education: "МГУ, филологический факультет",
  },
  {
    name: "Леонид Гаврилов",
    role: "Педагог по сценическому движению",
    image: Teacher10,
    faculty: "acting",
    education: "Школа-студия МХАТ",
  },
  {
    name: "Марина Щеглова",
    role: "Педагог по вокалу",
    image: Teacher11,
    faculty: "acting",
    education: "ВГИК, операторский факультет",
  },
  {
    name: "Никита Арсеньев",
    role: "Педагог по актёрскому мастерству",
    image: Teacher12,
    faculty: "acting",
    education: "СПбГИКиТ, продюсерский факультет",
  },
  {
    name: "Ольга Тимофеева",
    role: "Руководитель актёрского факультета",
    image: Teacher13,
    faculty: "acting",
    education: "ВГИК, режиссёрский факультет",
  },
  {
    name: "Павел Зорин",
    role: "Педагог по актёрскому мастерству",
    image: Teacher14,
    faculty: "acting",
    education: "ГИТИС, актёрский факультет",
  },
  {
    name: "Римма Ланская",
    role: "Педагог по сценической речи",
    image: Teacher15,
    faculty: "acting",
    education: "МГУ, филологический факультет",
  },
  {
    name: "Степан Гордеев",
    role: "Педагог по сценическому движению",
    image: Teacher16,
    faculty: "acting",
    education: "Школа-студия МХАТ",
  },
  {
    name: "Татьяна Ветрова",
    role: "Педагог по вокалу",
    image: Teacher17,
    faculty: "acting",
    education: "ВГИК, операторский факультет",
  },
  {
    name: "Ульяна Дымова",
    role: "Педагог по актёрскому мастерству",
    image: Teacher18,
    faculty: "acting",
    education: "СПбГИКиТ, продюсерский факультет",
  },
  {
    name: "Фёдор Кравцов",
    role: "Преподаватель философии",
    image: Teacher19,
    faculty: "general",
    education: "ВГИК, режиссёрский факультет",
  },
  {
    name: "Эльвира Сотникова",
    role: "Преподаватель истории искусств",
    image: Teacher20,
    faculty: "general",
    education: "ГИТИС, актёрский факультет",
  },
  {
    name: "Юрий Панкратов",
    role: "Преподаватель математики",
    image: Teacher21,
    faculty: "general",
    education: "МГУ, филологический факультет",
  },
  {
    name: "Яна Соколова",
    role: "Преподаватель иностранных языков",
    image: Teacher22,
    faculty: "general",
    education: "Школа-студия МХАТ",
  },
  {
    name: "Артём Верхов",
    role: "Преподаватель психологии",
    image: Teacher23,
    faculty: "general",
    education: "ВГИК, операторский факультет",
  },
  {
    name: "Галина Мирова",
    role: "Преподаватель литературы",
    image: Teacher24,
    faculty: "general",
    education: "СПбГИКиТ, продюсерский факультет",
  },
  {
    name: "Денис Ярцев",
    role: "Преподаватель философии",
    image: Teacher25,
    faculty: "general",
    education: "ВГИК, режиссёрский факультет",
  },
  {
    name: "Елена Круглова",
    role: "Преподаватель истории искусств",
    image: Teacher26,
    faculty: "general",
    education: "ГИТИС, актёрский факультет",
  },
  {
    name: "Захар Ильин",
    role: "Педагог по продюсированию",
    image: Teacher27,
    faculty: "prodcenter",
    education: "МГУ, филологический факультет",
  },
  {
    name: "Инна Полевая",
    role: "Продюсер проектно-продюсерского центра",
    image: Teacher28,
    faculty: "prodcenter",
    education: "Школа-студия МХАТ",
  },
  {
    name: "Кирилл Дёмин",
    role: "Руководитель производственной практики",
    image: Teacher29,
    faculty: "prodcenter",
    education: "ВГИК, операторский факультет",
  },
  {
    name: "Лидия Корнева",
    role: "Педагог по истории кино",
    image: Teacher30,
    faculty: "cinema",
    education: "ВГИК, киноведческий факультет",
  },
  {
    name: "Максим Нагорный",
    role: "Педагог по сценической речи",
    image: Teacher31,
    faculty: "acting",
    education: "ГИТИС, актёрский факультет",
  },
];
