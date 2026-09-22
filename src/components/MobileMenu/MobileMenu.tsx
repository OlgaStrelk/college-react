import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import { ScrollLink } from "../ScrollLink";
import { ROUTE_CONFIG } from "../../utils/routeConfig";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import Close from "../../assets/icons/burger_close.svg?react";
import Logo from "../../assets/icons/logo.svg?react";
import { CONTACTS } from "../../config/contacts";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  routes: typeof ROUTE_CONFIG;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, routes }) => {
  const portalRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "mobile-menu-portal");
    document.body.appendChild(portalRoot);
    portalRootRef.current = portalRoot;

    return () => {
      if (portalRootRef.current) {
        document.body.removeChild(portalRootRef.current);
      }
    };
  }, []);

  const menuContent = (
    <div
      className={classNames(styles["mobile-menu"], {
        [styles["mobile-menu--open"]]: isOpen,
      })}
      role="dialog"
      aria-hidden={!isOpen}
    >
      <div className={styles["mobile-menu__header"]}>
        <NavLink to="/" className={styles["logo-link"]}>
          <Logo className={styles.logo} width="116" height="29" />
        </NavLink>
        <Close
          width={40}
          height={40}
          className={styles["mobile-menu__close"]}
          onClick={onClose}
        />
      </div>
      <div className={styles["mobile-menu__content"]}>
        <nav className={styles["mobile-menu__nav"]}>
          {routes.map((link, index) =>
            link.path.startsWith("/") ? (
              <NavLink
                key={index}
                to={link.path}
                className={styles["mobile-menu__link"]}
                onClick={onClose}
              >
                {link.title}
              </NavLink>
            ) : (
              <ScrollLink
                key={index}
                to={link.path.slice(1)}
                className={styles["mobile-menu__link"]}
                onClick={onClose}
              >
                {link.title}
              </ScrollLink>
            )
          )}
        </nav>
        <LinkButton
          variant="default"
          size="md"
          href={CONTACTS.telegram}
          customClass={styles["mobile-menu__button"]}
          onClick={onClose}
        >
          Связаться с нами
        </LinkButton>
      </div>
    </div>
  );

  return portalRootRef.current
    ? createPortal(menuContent, portalRootRef.current)
    : null;
};

export default MobileMenu;
