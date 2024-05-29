import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./admin-panel.module.scss";
import { Sidebar } from "../components/sidebar/sidebar";

const ANIMATION_TIMEOUT = 350;

export const AdminPanel = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu((p) => !p);
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      <Sidebar/>
      <div className={styles.content}></div>
    </div>
  );
};
