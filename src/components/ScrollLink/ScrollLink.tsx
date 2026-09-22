import { useNavigate, useLocation } from "react-router-dom";

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.hash === to;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offset = 100;

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(to);
        if (section) {
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: sectionPosition - offset,
            behavior: "smooth",
          });
        }
      }, 0);
    } else {
      const section = document.querySelector(to);
      if (section) {
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      aria-current={isActive ? "true" : undefined}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
