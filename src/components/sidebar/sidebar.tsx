import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/commerce-logo.svg";
import info from "../../assets/icons/info-square.svg";
import commerceFlow from "../../assets/photos/commerce-flow.svg";
import { CSSTransition } from "react-transition-group";
import styles from "./sidebar.module.scss";
import { MenuItem } from "./menu-item";
import { MENU_ITEMS, SubMenu } from "../../utils";

const ANIMATION_TIMEOUT = 350;

export const Sidebar = () => {
  const [subMenu, setSubMenu] = useState<SubMenu | null>(null);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const sideBarRef = useRef<HTMLElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);

  const changeSubMenu = (newSubmenu: SubMenu | null) => {
    if (subMenu?.title !== newSubmenu?.title || subMenu === null) {
      setSubMenu(newSubmenu);
      setShowSubMenu(true);
    } else {
      setShowSubMenu(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setShowSubMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef]);

  return (
    <nav ref={sideBarRef} className={styles.sidebar}>
      <div className={styles.menu}>
        <div className={styles.menuLogoSection}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.menuContent}>
          <div className={styles.menuItemsSection}>
            {MENU_ITEMS.map(({ description, icon, iconFilled, submenu: itemSubMenu }) => (
              <MenuItem
                key={description}
                description={description}
                icon={icon}
                iconFilled={iconFilled}
                onClick={() => changeSubMenu(itemSubMenu ?? null)}
                isActive={subMenu !== null && subMenu?.title === itemSubMenu?.title}
              />
            ))}
          </div>
          <div className={styles.menuInfoSection}>
            <img src={info} alt="info-square" />
            <span className={styles.menuInfoText}>1.01</span>
          </div>
        </div>
      </div>
      <CSSTransition
        nodeRef={subMenuRef}
        in={showSubMenu}
        timeout={ANIMATION_TIMEOUT}
        unmountOnExit
        mountOnEnter
        classNames={{
          enter: styles.subMenuHidden,
          enterActive: styles.subMenuVisible,
          enterDone: styles.subMenuVisible,
          exit: styles.subMenuHidden,
        }}
        onExited={() => setSubMenu(null)}
      >
        <div ref={subMenuRef} className={styles.subMenu}>
          <div className={styles.subMenuLogoSection}>
            <img src={commerceFlow} alt="commerce-flow" />
          </div>
          <div className={styles.subMenuContent}>
            <h3 className={styles.subMenuTitle}>{subMenu?.title}</h3>
            <ul className={styles.subMenuItemGroup}>
              {(subMenu?.items ?? []).map(({ title, checked }) => (
                <li className={styles.subMenuItem}>
                  <span className={styles.subMenuItemText}>{title}</span>
                  {!checked && <span className={styles.circle} />}
                </li>
              ))}
            </ul>
            <div className={styles.subMenuInfoSection}>
              <span className={styles.subMenuInfoHelp}>Help Started</span>
              <span className={styles.subMenuInfoText}>Version . 1.00.0.2</span>
            </div>
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
};
