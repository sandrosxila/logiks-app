import PlusSquare from '../../assets/icons/plus-square.svg?react';
import styles from "./content.module.scss";
import { Card } from "./card";
import { COLLECTIONS } from "../../utils";

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.headingSection}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading}>Manage Category Page</h2>
          <span className={styles.subHeading}>
            Is simply dummy text of the printing and typesetting industry.
          </span>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.createNewCategory}>
            <PlusSquare />
            <span>Create New Category</span>
          </button>
        </div>
      </div>
      <div className={styles.cardSection}>
        {COLLECTIONS.map(({name, isEdited}, index) => <Card key={index} name={name} isEdited={isEdited} />)}
      </div>
    </div>
  );
};
