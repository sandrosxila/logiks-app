import React, { useState } from "react";
import styles from "./menu-page.module.scss";
import { ShapeItem } from "../components/shape-item/shape-item";
import classNames from "classnames";

export const MenuPage = () => {
  const [phase, setPhase] = useState(0);

  const onRelocationClick = () => {
    setPhase((prevPhase) => (prevPhase === 0 ? 1 : 0));
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Graphic animation</span>

      <div className={classNames(styles.relocationShape, {
        [styles.relocationShapeAside]: phase !== 0
      })}>
        <ShapeItem size={374} title="Relocation" onClick={onRelocationClick} />
      </div>

      <div className={classNames(styles.personalShape, {
        [styles.personalShapeAside]: phase < 1
      })}>
        <ShapeItem size={220} title="Personal" color={"#FF6000"} onClick={onRelocationClick} />
      </div>

      <div className={classNames(styles.corporateShape, {
        [styles.corporateShapeAside]: phase < 1
      })}>
        <ShapeItem size={220} title="Corporate" color={"#FF6000"} onClick={onRelocationClick} />
      </div>
    </div>
  );
};
