import React, { useState } from "react";
import styles from "./menu-page.module.scss";
import { ShapeItem } from "../components/shape-item/shape-item";
import classNames from "classnames";
import { HolandHop } from "../components/holandhop/holandhop";

export const MenuPage = () => {
  const [phase, setPhase] = useState(0);
  const [selected, setSelected] = useState(0);

  const onRelocationClick = () => {
    setPhase((prevPhase) => (prevPhase === 0 ? 1 : 0));
  };

  const onPersonalClick = () => {
    setPhase(2);
    setSelected(0);
  };

  const onCorporateClick = () => {
    setPhase(2);
    setSelected(1);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Graphic animation</span>

      <div
        className={classNames(styles.relocationShape, {
          [styles.relocationShapeAside]: phase !== 0,
        })}
      >
        <ShapeItem size={374} title="Relocation" onClick={onRelocationClick} />
      </div>

      <div
        className={classNames(styles.personalShape, {
          [styles.personalShapeAside]: phase === 0,
          [styles.personalShapeSelected]: phase === 2 && selected == 0,
          [styles.personalShapePhaseAside]: phase === 2,
        })}
      >
        <ShapeItem
          size={220}
          title="Personal"
          color={"#FF6000"}
          onClick={onPersonalClick}
        />
      </div>

      <div
        className={classNames(styles.corporateShape, {
          [styles.corporateShapeAside]: phase === 0,
          [styles.corporateShapeSelected]: phase === 2 && selected == 1,
          [styles.corporateShapePhaseAside]: phase === 2,
        })}
      >
        <ShapeItem
          size={220}
          title="Corporate"
          color={"#FF6000"}
          onClick={onCorporateClick}
        />
      </div>

      <div
        className={classNames(styles.leftLeafShape, {
          [styles.leftLeafShapeAside]: phase !== 2 || selected == 1,
        })}
      >
        <ShapeItem size={220} title="Family Relocation" color={"#C6C6C6"} />
      </div>

      <div
        className={classNames(styles.rightLeafShape, {
          [styles.rightLeafShapeAside]: phase !== 2 || selected == 1,
        })}
      >
        <ShapeItem size={220} title="Home Finding" color={"#C6C6C6"} />
      </div>

      <div
        className={classNames(styles.leftLeafShape, {
          [styles.leftLeafShapeAside]: phase !== 2 || selected == 0,
        })}
      >
        <ShapeItem
          size={220}
          title="Registering Your Company"
          color={"#C6C6C6"}
        />
      </div>

      <div
        className={classNames(styles.rightLeafShape, {
          [styles.rightLeafShapeAside]: phase !== 2 || selected == 0,
        })}
      >
        <ShapeItem
          size={220}
          title="Registering Your Company"
          color={"#C6C6C6"}
        />
      </div>
      <div className={styles.holandHop}>
        <HolandHop />
      </div>
    </div>
  );
};
