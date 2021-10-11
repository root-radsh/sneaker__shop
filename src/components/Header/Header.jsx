import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export default function Header({ toggle, totalSum }) {
  return (
    <header className={styles.headerBlock}>
      <div className={styles.header__left}>
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="" />
        </Link>
        <div className={styles.header__left__info}>
          <h2>SNEAKERS SHOP</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.header__right}>
        <li onClick={toggle} className={styles.addToCard}>
          <img
            className={styles.header__right__card}
            width={18}
            height={18}
            src="/img/cart.svg"
            alt=""
          />
          <span>{totalSum} руб.</span>
        </li>
        <li>
          <Link to="/wishlist">
            <img
              className={styles.wishListIcon}
              width={20}
              height={20}
              src="/img/fav.svg"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              className={styles.userIcon}
              width={20}
              height={20}
              src="/img/user.svg"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
