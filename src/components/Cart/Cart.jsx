import React, { useState } from "react";

import styles from "./Cart.module.scss";

import { createOrder } from "../../services/ordersService";
import { deleteFromCart } from "../../services/cartService";

import CartItems from "../CartItems/CartItems";
import EmptyDefault from "../EmptyDefault/EmptyDefault";

export default function Cart({
  items,
  closeCart,
  remove,
  charge,
  totalSum,
  setCartItems,
}) {
  const [orderCompleted, setOrderComplited] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const addOrder = async (ordersItems) => {
    try {
      let id = ordersItems.length + Math.floor(Math.random() * 10);
      const order = {
        id,
        ordersItems,
      };
      setOrderComplited(true);
      createOrder(order);
      setOrderId(id);
      await ordersItems.map((item) => deleteFromCart(item.id));
      setCartItems([]);
    } catch (error) {
      alert("Не удалось создать заказ :( Попробуйте сново");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.sideCart}>
        <div className={styles.sideCartHeader}>
          <h2>Корзина</h2>
          <img
            width={32}
            height={32}
            onClick={closeCart}
            src="/img/clouse.svg"
            alt="Clouse"
          />
        </div>

        <div className={styles.cartItemsWrapper}>
          {items.length > 0 ? (
            items.map((item) => {
              return <CartItems key={item.id} {...item} remFromCart={remove} />;
            })
          ) : (
            <EmptyDefault
              closeCart={closeCart}
              title={orderCompleted ? "Заказ оформлен" : "Корзина пуста"}
              srcImg={orderCompleted ? "/img/order.png" : "/img/emptyCart.svg"}
              description={
                orderCompleted
                  ? ` Ваш заказ #${orderId} скоро будет передан в доставку`
                  : `Добавьте хотя бы одну пару 
                кроссовок, чтобы сделать заказ.`
              }
            />
          )}
        </div>
        {items.length > 0 && (
          <div className={styles.snekersOrder}>
            <ul className={styles.sideCartFooter}>
              <li>
                <span>Налог 5%:</span>
                <div className={styles.devider}></div>
                <b>{charge.toFixed(2)} руб.</b>
              </li>
              <li>
                <span>Итого:</span>
                <div className={styles.devider}></div>
                <b>{totalSum} руб.</b>
              </li>
              <li>
                <button
                  className={styles.greenButton}
                  onClick={() => addOrder(items)}
                >
                  Оформить заказ
                  <img src="/img/arrow.svg" alt="Arrow" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
