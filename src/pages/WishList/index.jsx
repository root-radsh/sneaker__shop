import { useHistory } from "react-router";

import SneakerItem from "../../components/SneakerItem/SneakerItem";
import styles from "./WishList.module.scss";

export default function WishList({
  favorites,
  addToCart,
  deleteFromWishList,
  isItemAdded,
  isItemLiked,
}) {
  const history = useHistory();

  const onBack = () => {
    history.push("/");
  };
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
        <h1>Избранные товары</h1>
      </div>
      <div className={styles.content__sneakers}>
        {favorites.length > 0 ? (
          favorites.map((item) => {
            return (
              <div className={styles.sneakerWrapper}>
                <SneakerItem
                  key={item.id}
                  {...item}
                  addItemToCart={addToCart}
                  addToWishList={deleteFromWishList}
                  isItemAdded={isItemAdded}
                  isItemLiked={isItemLiked}
                />
              </div>
            );
          })
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyHeader}>
              <img width={70} height={70} src="/img/smile2.png" alt=":(" />
              <h2>У вас нет избранных товаров</h2>
            </div>
            <div className={styles.emptyFooter}>
              <span>Добавьте хотя бы один товар</span>
              <button onClick={onBack} className={styles.greenButton}>
                <img src="/img/arrowBack.svg" alt="Arrow back" />
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
