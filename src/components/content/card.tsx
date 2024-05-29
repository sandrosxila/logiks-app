import React from "react";
import caretDown from "../../assets/icons/caret-down.svg";
import folder from "../../assets/icons/folder.svg";
import TrashCan from "../../assets/icons/trash-can.svg?react";
import Pencil from "../../assets/icons/pencil.svg?react";
import dots from "../../assets/icons/dots.svg";
import PlusSquare from "../../assets/icons/plus-square.svg?react";
import styles from "./card.module.scss";
import classNames from "classnames";

type CardProps = {
  name: string;
  isEdited: boolean;
};

export const Card = ({ name, isEdited }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.collectionPanel}>
          <button type="button" className={styles.caretButton}>
            <img className={styles.caret} src={caretDown} alt="expand" />
          </button>
          <button type="button" className={styles.folderButton}>
            <img src={folder} alt="folder" />
          </button>

          <span className={styles.text}>New Collection</span>

          <button type="button" className={styles.trashCanButton}>
            <TrashCan title="remove" />
          </button>
          <button type="button" className={styles.editButton}>
            <Pencil title="edit" />
          </button>
        </div>

        <div
          className={classNames(styles.articlePanel, {
            [styles.articlePanelEdited]: isEdited,
          })}
        >
          <img className={styles.dots} src={dots} alt="drag" />
          <span className={styles.articlePanelText}>{name}</span>
          <button type="button" className={styles.articlePanelTrashCanButton}>
            <TrashCan title="remove" className={styles.trashCan} />
          </button>
          <button type="button" className={styles.articlePanelEditButton}>
            <Pencil title="edit" className={styles.pencil} />
          </button>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.newCollectionSection}>
          <span className={styles.newCollectionText}>Add New Collection</span>
          <button type="button" className={styles.addCollection}>
            <PlusSquare />
          </button>

          <hr className={styles.line} />
        </div>
        <div className={styles.collectionDescription}>
          Drag treeNode to insert after the other treeNode.
        </div>
      </div>
    </div>
  );
};
