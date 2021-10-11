import React from "react";
import styles from "./CartItems.module.scss";

export default function CartItems({ title, srcImg, price, id, remFromCart }) {
  return (
    <div className={styles.cartItems}>
      <img width={70} height={70} src={srcImg} alt={title} />
      <div className={styles.cartItemDescription}>
        <h5>{title}</h5>
        <b>{price} руб.</b>
      </div>
      <img
        width={32}
        height={32}
        onClick={() => remFromCart(id)}
        className={styles.deleteItem}
        src="/img/clouse.svg"
        alt="Delete item"
      />
    </div>
  );
}
