import React, { useState } from "react";
import styles from "./product-page.module.scss";
import { Intro } from "../components/intro/intro";
import {GuideText} from '../components/guide-text/guide-text';
import { Carousel } from "../components/carousel/carousel";


export const ProductPage = () => {
  const [hideIntro, setHideIntro] = useState(false);
  

  return (
    <main className={styles.wrapper}>
      <Intro hideIntro={hideIntro} onHide={() => setHideIntro(true)} />
      <Carousel hideIntro={hideIntro} />
      <GuideText hideIntro={hideIntro}/>
    </main>
  );
};
