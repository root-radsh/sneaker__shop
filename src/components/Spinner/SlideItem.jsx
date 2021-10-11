import React from "react";

import styles from "./Spiner.module.scss";

export const SlideItem = ({ title, img }) => {
  return (
    <div className={styles.slideItem}>
      <div className={styles.slideContent}>
        <h2 className={styles.slideTitle}>{title}</h2>
      </div>
      <div className={styles.slideImg}>
        <img src={img} alt="Sclide imeg" />
      </div>
    </div>
  );
};
