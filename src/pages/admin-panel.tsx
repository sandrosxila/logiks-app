import React from "react";
import styles from "./admin-panel.module.scss";
import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";


export const AdminPanel = () => {


  return (
    <main className={styles.wrapper}>
      <Header />
      <Sidebar />
      <div className={styles.content}></div>
    </main>
  );
};
