import type { FC } from "react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";
import { LinkButton } from "../ui/LinkButton";

const PageNotFound: FC = () => {
  return (
    <main className="page-not-found">
      <h1>Страница еще не существует(</h1>
      <LinkButton icon={ArrowRight}>На главную</LinkButton>
    </main>
  );
};
export default PageNotFound;
