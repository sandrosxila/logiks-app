import { useState } from "react";
import styles from "./menu-item.module.scss";
import classNames from "classnames";

type MenuItemProps = {
  isActive: boolean;
  description: string;
  icon: string;
  iconFilled: string;
  onClick?: () => void;
};

export const MenuItem = ({
  isActive,
  icon,
  iconFilled,
  description,
  onClick,
}: MenuItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      className={classNames(styles.menuItemWrapper, {
        [styles.menuItemActive]: isActive,
      })}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <img src={isHovering || isActive ? iconFilled : icon} alt={description} />
    </button>
  );
};
