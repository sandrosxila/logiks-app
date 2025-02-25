import styles from "./guide-text.module.scss";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const ANIMATION_TIMEOUT = 350;

type GuideTextProps = {
  hideIntro: boolean;
};

export const GuideText = ({ hideIntro }: GuideTextProps) => {
  const firstGuideRef = useRef<HTMLSpanElement | null>(null);
  const secondGuideRef = useRef<HTMLSpanElement | null>(null);

  return (
    <span className={styles.guide}>
      <CSSTransition
        nodeRef={firstGuideRef}
        in={!hideIntro}
        timeout={ANIMATION_TIMEOUT}
        unmountOnExit
        mountOnEnter
        classNames={{
          exit: styles.guideTextHidden,
        }}
      >
        <span ref={firstGuideRef} className={styles.guideText}>
          This is a small hover animation. When pressed, it scrolls
        </span>
      </CSSTransition>
      <CSSTransition
        nodeRef={secondGuideRef}
        in={hideIntro}
        timeout={ANIMATION_TIMEOUT}
        unmountOnExit
        mountOnEnter
        classNames={{
          enter: styles.guideTextHidden,
          enterActive: styles.guideText,
          enterDone: styles.guideText,
        }}
      >
        <span ref={secondGuideRef}>
          Here you can exchange boxes with a drag and drop
        </span>
      </CSSTransition>
    </span>
  );
};
