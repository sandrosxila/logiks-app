import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import ShapeOne from "../../assets/icons/outline-1.svg?react";
import ShapeTwo from "../../assets/icons/outline-2.svg?react";
import ShapeThree from "../../assets/icons/outline-3.svg?react";
import ShapeFour from "../../assets/icons/outline-4.svg?react";

import styles from './shape-item.module.scss';
import classNames from "classnames";

type ShapeItemProps = {
  size: number;
  color?: string;
  title: string;
  onClick?: () => void;
}

export const ShapeItem = ({size, color, title, onClick} : ShapeItemProps) => {
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await Promise.all([
      animate("#first", { opacity: 0, scale: 1 }, { duration: 1, type: 'tween' }),
      animate("#second", { opacity: 1, scale: 1.02 }, { duration: 1, type: 'tween' }),
    ]);

    await Promise.all([
      animate("#second", { opacity: 0, scale: 1 }, { duration: 1, type: 'tween' }),
      animate("#third", { opacity: 1, scale: 1.02 }, { duration: 1, type: 'tween' }),
    ]);

    await Promise.all([
      animate("#third", { opacity: 0, scale: 1 }, { duration: 1, type: 'tween' }),
      animate("#fourth", { opacity: 1, scale: 1.02 }, { duration: 1, type: 'tween' }),
    ]);

    await Promise.all([
      animate("#fourth", { opacity: 0, scale: 1 }, { duration: 1, type: 'tween' }),
      animate("#first", { opacity: 1, scale: 1.02 }, { duration: 1, type: 'tween' }),
    ]);
    await myAnimation();
  }

  useEffect(() => {
    myAnimation();
  }, []);

  return (
    <button style={{maxWidth: size}} className={styles.wrapper} ref={scope} onClick={onClick}>
      <motion.div id="first" style={{ opacity: 1, scale: 1.02 }} className={styles.item}>
        <ShapeOne color={color} width={size} height={size} />
      </motion.div>
      <motion.div id="second" style={{ opacity: 0, scale: 1 }} className={styles.item}>
        <ShapeTwo color={color} width={size} height={size} />
      </motion.div>
      <motion.div id="third" style={{ opacity: 0, scale: 1 }} className={styles.item}>
        <ShapeThree color={color} width={size} height={size} />
      </motion.div>
      <motion.div id="fourth" style={{ opacity: 0, scale: 1 }} className={styles.item}>
        <ShapeFour color={color} width={size} height={size} />
      </motion.div>
      <span style={{maxWidth: size}} className={classNames(styles.item, styles.linearWipe, styles.text)}>
        {title}
      </span>
    </button>
  );
};
