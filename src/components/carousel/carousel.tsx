import { useRef, useState } from "react";
import boxOne from "../../assets/photos/box-1.png";
import boxTwo from "../../assets/photos/box-2.png";
import boxThree from "../../assets/photos/box-3.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import { DotNavigator } from "./dot-navigator";

import styles from "./carousel.module.scss";

const ANIMATION_TIMEOUT = 350;
const DRAG_BUFFER = 50;

type CarouselProps = {
  hideIntro: boolean;
};

export const Carousel = ({ hideIntro }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dragX = useMotionValue(0);
  const moveX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      setCurrentPage((page) => Math.min(page + 1, 2));
    } else if (x >= DRAG_BUFFER) {
      setCurrentPage((page) => Math.max(page - 1, 0));
    }
  };

  const distance = useTransform<number, number>([dragX, moveX], ([dX, mX]) => {
    return (dX + mX) / window.innerWidth;
  });

  const backgroundColor = useTransform(
    distance,
    [-0.5, 0, 0.5],
    ["#F6E1EE", "#EFF2FF", "#EBFFFC"]
  );

  const scale = useTransform(distance, (d) => {
    return 1 - Math.abs(d);
  });

  const scaleEdge = useTransform(distance, (d) => {
    return 0.5 + Math.abs(d);
  });

  const translateLeft = useTransform(distance, (d) => {
    return `${(Math.abs(d) - 0.5) * 50}%`;
  });

  const translateRight = useTransform(distance, (d) => {
    return `${(0.5 - Math.abs(d)) * 50}%`;
  });

  return (
    <CSSTransition
      nodeRef={carouselRef}
      in={hideIntro}
      timeout={ANIMATION_TIMEOUT}
      unmountOnExit
      mountOnEnter
      classNames={{
        enter: styles.carouselHidden,
        enterActive: styles.carousel,
        enterDone: styles.carousel,
      }}
    >
      <motion.div ref={carouselRef} style={{ backgroundColor }}>
        <div className={styles.carouselBoardWrapper}>
          <motion.div
            className={styles.carouselBoard}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
              translateX: moveX,
            }}
            animate={{
              translateX: (50 - currentPage * 50) * (window.innerWidth / 100),
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            onDragEnd={onDragEnd}
          >
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                scale: scaleEdge,
                translateX: translateLeft,
              }}
            >
              <img src={boxOne} className={styles.boxOne} draggable="false" />
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                scale: scale,
              }}
            >
              <img src={boxTwo} className={styles.boxTwo} draggable="false" />
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                scale: scaleEdge,
                translateX: translateRight,
              }}
            >
              <img
                src={boxThree}
                className={styles.boxThree}
                draggable="false"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.pageNavigator}>
          <DotNavigator
            currentPage={currentPage}
            onChange={setCurrentPage}
            totalPages={3}
          />
        </div>
      </motion.div>
    </CSSTransition>
  );
};
