import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "./MainLayout.module.scss";
import type { ReactNode } from "react";
interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
