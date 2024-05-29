import React, { useState } from "react";
import styles from "./product-page.module.scss";
import { Intro } from "../components/intro/intro";
import {GuideText} from '../components/guide-text/guide-text';


export const ProductPage = () => {
  const [hideIntro, setHideIntro] = useState(false);


  return (
    <main className={styles.wrapper}>
      <GuideText hideIntro={hideIntro}/>
      <Intro hideIntro={hideIntro} onHide={() => setHideIntro(true)} />
    </main>
  );
};
