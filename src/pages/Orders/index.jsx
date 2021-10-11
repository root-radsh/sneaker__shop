import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { getOrders } from "../../services/ordersService";
import styles from "./Orders.module.scss";

export default function Orders({ closeCart }) {
  const history = useHistory();
  const [orders, setOrders] = useState([]);

  const onBack = () => {
    history.push("/");
  };

  useEffect(() => {
    try {
      (async function () {
        const { data } = await getOrders();
        setOrders(data);
      })();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          onClick={onBack}
          width={35}
          height={35}
          src="/img/backBtn.svg"
          alt="Back"
        />
        <h1>Заказы</h1>
      </div>
      {orders.length > 0 ? (
        orders.map((item) => {
          const { ordersItems } = item;
          return (
            <div key={item.id} className={styles.orders}>
              <h2>Заказ #{item.id}</h2>
              <div className={styles.orderItems}>
                {ordersItems.map((orderItem) => {
                  return (
                    <div
                      key={orderItem.id}
                      className={styles.content__sneaker__item}
                    >
                      <ul>
                        <li>
                          <img
                            width={134}
                            height={112}
                            src={orderItem.srcImg}
                            alt={orderItem}
                          />
                        </li>
                        <li className={styles.sneaker__item__title}>
                          <h5>{orderItem.title}</h5>
                        </li>
                        <li className={styles.sheaker__item__footer}>
                          <div className={styles.sheaker__item__price}>
                            <span>ЦЕНА:</span>
                            <p>{orderItem.price} руб.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyHeader}>
            <img width={70} height={70} src="/img/smile1.png" alt=":(" />
            <h2>У вас нет заказов</h2>
          </div>
          <div className={styles.emptyFooter}>
            <span>Оформите хотя бы один заказ</span>
            <button onClick={closeCart} className={styles.greenButton}>
              <img src="/img/arrowBack.svg" alt="Arrow back" />
              Вернуться назад
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
