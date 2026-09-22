import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { LinkButton } from "../../ui/LinkButton";
import { ScrollLink } from "../ScrollLink";
import { MobileMenu } from "../MobileMenu";
import { ROUTE_CONFIG } from "../../utils/routeConfig";
import Logo from "../../assets/icons/logo.svg?react";
import Burger from "../../assets/icons/burger.svg?react";
import { CONTACTS } from "../../config/contacts";


const Header: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const heroBlock = document.querySelector(".hero");
    if (!heroBlock) {
      setIsHeroVisible(false);
      return;
    }

    const handleScroll = () => {
      const heroHeight = 480;
      const isVisible = window.scrollY < heroHeight;
      setIsHeroVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`${styles.header} ${isHeroVisible ? styles["hero-state"] : styles["default-state"]}`}
    >
      <div className={styles["header-content"]}>
        <NavLink to="/" className={styles["logo-link"]}>
          <Logo className={styles.logo} width="151" height="36" />
        </NavLink>
        <div className={styles["nav-links"]}>
          {ROUTE_CONFIG.filter(({ path }) => path !== "*" && path !== "/" && path !== "/svedeniya").map(
            (link, index) =>
              link.path.startsWith("/") ? (
                <NavLink
                  key={index}
                  to={link.path}
                  className={styles["nav-link"]}
                >
                  {link.title}
                </NavLink>
              ) : (
                <ScrollLink
                  key={index}
                  to={link.path.slice(1)}
                  className={styles["nav-link"]}
                >
                  {link.title}
                </ScrollLink>
              )
          )}
          <LinkButton
            variant="default"
            size="sm"
            href={CONTACTS.telegram}
          >
            Связаться с нами
          </LinkButton>
        </div>
        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <Burger width="40" height="40" />
        </button>
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={toggleMenu}
          routes={ROUTE_CONFIG.filter(
            ({ path }) => path !== "*" && path !== "/"
          )}
        />
      </div>
    </header>
  );
};

export default Header;
