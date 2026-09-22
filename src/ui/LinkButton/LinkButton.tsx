import React, { type ComponentType } from "react";
import styles from "./LinkButton.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "ghost" | "simple";
  size?: "sm" | "md" | "lg" | "icon";
  icon?: ComponentType<{ className?: string }>;
  customClass?: string;
  href?: string;
  children?: React.ReactNode;
}

// Matches absolute URLs and special schemes (http:, https:, mailto:, tel:, //...)
// so external links get a real <a> tag instead of react-router's client-side Link,
// which fails to navigate to a different origin.
const isExternalHref = (href: string) => /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href);

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      customClass = "",
      variant = "default",
      size = "md",
      icon: Icon,
      children,
      href = "/",
      ...props
    },
    ref
  ) => {
    const className = classNames(
      styles["link-button"],
      styles[`link-button--variant-${variant}`],
      styles[`link-button--size-${size}`],
      customClass
    );

    const content = (
      <>
        {children && (
          <span className={styles["link-button__text"]}>{children}</span>
        )}
        {Icon && <Icon className={styles["link-button__icon"]} />}
      </>
    );

    if (isExternalHref(href)) {
      return (
        <a href={href} className={className} ref={ref} {...props}>
          {content}
        </a>
      );
    }

    return (
      <Link to={href} className={className} ref={ref} {...props}>
        {content}
      </Link>
    );
  }
);
LinkButton.displayName = "LinkButton";

export default LinkButton;
