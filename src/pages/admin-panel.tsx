import styles from "./admin-panel.module.scss";
import { Sidebar } from "../components/sidebar/sidebar";
import { Header } from "../components/header/header";
import { Content } from "../components/content/content";


export const AdminPanel = () => {


  return (
    <main className={styles.wrapper}>
      <Header />
      <Sidebar />
      <Content />
    </main>
  );
};
