import styles from "./ProductionCenter.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import Link from "../../assets/icons/link.svg?react";
import type { FC, SVGProps } from "react";

interface ProductionCenterData {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: FC<SVGProps<SVGSVGElement>>;
  linkUrl: string;
}

const productionCenter: ProductionCenterData = {
  title: "Проектно-продюсерский центр",
  description:
    "Проектно-продюсерский центр продвигает проекты студентов и создает коридоры входа в индустрию для творческих команд студентов и выпускников. В рамках проектно-продюсерского центра для студентов организуется производственная практика в кинопродакшенах и театрах, трудоустройство и возможность компенсировать затраты на обучение (в том числе, через участие в работе продакшена внутри колледжа)",
  buttonText: "Подробнее",
  buttonIcon: Link,
  linkUrl: "/prodcenter",
};

const ProductionCenter: React.FC = () => (
  <section className={styles["production-center"]} id="prodcenter">
    <div className={styles.container}>
      <h2>{productionCenter.title}</h2>
      <p>{productionCenter.description}</p>
      <div className={styles["buttons-container"]}>
        <LinkButton
          variant="simple"
          size="md"
          icon={Link}
          href={productionCenter.linkUrl}
        >
          {productionCenter.buttonText}
        </LinkButton>
      </div>
    </div>
  </section>
);

export default ProductionCenter;
