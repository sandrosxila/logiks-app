import {useRef} from "react";
import boxOne from "../../assets/photos/box-1.png";
import boxTwo from "../../assets/photos/box-2.png";
import boxThree from "../../assets/photos/box-3.png";
import { CSSTransition } from "react-transition-group";

import styles from "./intro.module.scss";

const ANIMATION_TIMEOUT = 350;

type IntroProps = {
  hideIntro: boolean;
  onHide: () => void;
}

export const Intro = ({hideIntro, onHide}: IntroProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const seeAllButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <CSSTransition
        nodeRef={containerRef}
        in={!hideIntro}
        timeout={ANIMATION_TIMEOUT}
        unmountOnExit
        mountOnEnter
        classNames={{
          exit: styles.containerHidden,
        }}
      >
        <div ref={containerRef} className={styles.container}>
          <img src={boxOne} className={styles.boxOne} />
          <img src={boxTwo} className={styles.boxTwo} />
          <img src={boxThree} className={styles.boxThree} />
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={seeAllButtonRef}
        in={!hideIntro}
        timeout={ANIMATION_TIMEOUT}
        unmountOnExit
        mountOnEnter
        classNames={{
          exit: styles.seeAllButtonHidden,
        }}
      >
        <button
          ref={seeAllButtonRef}
          type="button"
          className={styles.seeAllButton}
          onClick={onHide}
        >
          <span className={styles.seeAllButtonText}>See all Product</span>
        </button>
      </CSSTransition>
    </>
  );
};
