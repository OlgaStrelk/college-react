import styles from "./Footer.module.scss";
import Divider from "../../assets/icons/line-1.svg";
import Logo from "../../assets/icons/logo.svg?react";
import VkIcon from "../../assets/icons/vk.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import { LinkButton } from "../../ui/LinkButton";
import { Dropdown } from "../Dropdown";
import { CONTACTS } from "../../config/contacts";

const Footer: React.FC = () => {

  const socialLinks = [
    {
      name: "VK",
      icon: VkIcon,
      url: "#",
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: CONTACTS.telegram,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <img src={Divider} alt="Разделительная линия" />
        <div className={styles["footer-main"]}>
          <div className={styles["footer-logo"]}>
          <Logo className={styles.logo} width="116" height="29" />

          </div>

          <div className={styles["footer-contacts"]}>
            <h3 className={styles["contacts-title"]}>Контакты</h3>
            <address className={styles.address}>{CONTACTS.address}</address>
            <a
              href={`mailto:${CONTACTS.email}`}
              className={styles.email}
              rel="noopener noreferrer"
              target="_blank"
            >
              {CONTACTS.email}
            </a>
          </div>

          <Dropdown />
          <LinkButton
            href={CONTACTS.telegram}
            variant="ghost"
            size="sm"
            customClass={styles["contact-button"]}
          >
            <span>Связаться с нами</span>
          </LinkButton>
        </div>

        <div className={styles["footer-bottom"]}>
          <p className={styles.copyright}>Новый киноколледж, 2025</p>
          <div className={styles["social-links"]}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.name}
                  className={styles["social-link"]}
                >
                  <img src={Icon} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;