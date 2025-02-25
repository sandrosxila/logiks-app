import { Link } from "react-router-dom";
import arrowRight from "../assets/icons/arrow-right.svg";
import commercePagePhoto from "../assets/photos/commerce-page.png";
import productPagePhoto from "../assets/photos/product-page.png";
import menuPagePhoto from "../assets/photos/menu-page.png";
import styles from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.sectionLeft}>
          <span className={styles.sectionName}>Test 1</span>
          <span className={styles.sectionHeading}>
            Admin Panel Manage Category Page
          </span>
          <Link to={"/admin-panel"} className={styles.sectionLink}>
            <span className={styles.sectionLinkText}>Case Study</span>
            <img src={arrowRight} alt="navigate to" />
          </Link>
        </div>
        <div className={styles.sectionRight}>
          <img src={commercePagePhoto} alt="admin panel photo" className={styles.adminPhoto}/>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionLeft}>
          <span className={styles.sectionName}>Test 2</span>
          <span className={styles.sectionHeading}>
            Hover animation With drag and drop
          </span>
          <Link to={"/product"} className={styles.sectionLink}>
            <span className={styles.sectionLinkText}>Case Study</span>
            <img src={arrowRight} alt="navigate to" />
          </Link>
        </div>
        <div className={styles.sectionRight}>
          <img src={productPagePhoto} alt="admin panel photo" className={styles.productPhoto}/>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionLeft}>
          <span className={styles.sectionName}>Test 3</span>
          <span className={styles.sectionHeading}>Graphic animation</span>
          <Link to={"/menu"} className={styles.sectionLink}>
            <span className={styles.sectionLinkText}>Case Study</span>
            <img src={arrowRight} alt="navigate to"/>
          </Link>
        </div>
        <div className={styles.sectionRight}>
          <img src={menuPagePhoto} alt="admin panel photo" className={styles.menuPhoto}/>
        </div>
      </section>
    </main>
  );
};
