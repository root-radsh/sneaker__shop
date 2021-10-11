import React from "react";
import styles from "./EmptyDefault.module.scss";
export default function EmptyDefault({
  closeCart,
  srcImg,
  title,
  description,
}) {
  return (
    <div className={styles.empty}>
      <div className={styles.emptyHeader}>
        <img width={120} height={120} src={srcImg} alt={title} />
        <h2>{title}</h2>
      </div>
      <div className={styles.emptyFooter}>
        <span>{description}</span>
        <button onClick={closeCart} className={styles.greenButton}>
          <img src="/img/arrowBack.svg" alt="Arrow back" />
          Вернуться назад
        </button>
      </div>
    </div>
  );
}
