import styles from "./CardsGrid.module.scss";
interface ICardsGridProps {
  children: React.ReactNode;
}
const CardsGrid: React.FC<ICardsGridProps> = ({ children }) => {
  return <div className={styles["cards-grid"]}>{children}</div>;
};
export default CardsGrid;
