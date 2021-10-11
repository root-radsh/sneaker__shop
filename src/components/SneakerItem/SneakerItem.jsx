import styles from "./SneakerItem.module.scss";

export default function SneakerItem({
  title,
  srcImg,
  price,
  id,
  addItemToCart,
  addToWishList,
  isItemAdded,
  isItemLiked,
}) {
  const addToCard = () => {
    addItemToCart({ title, srcImg, price, id });
  };
  const addToFavorite = () => {
    addToWishList({ title, srcImg, price, id });
  };
  return (
    <div className={styles.content__sneaker__item}>
      <ul>
        <li>
          <img
            width={32}
            height={32}
            className={styles.likeButton}
            onClick={addToFavorite}
            src={isItemLiked(id) ? "/img/like.svg" : "/img/unlike.png"}
            alt="Favorite"
          />
          <img width={134} height={112} src={srcImg} alt={title} />
        </li>
        <li className={styles.sneaker__item__title}>
          <h5>{title}</h5>
        </li>
        <li className={styles.sheaker__item__footer}>
          <div className={styles.sheaker__item__price}>
            <span>ЦЕНА:</span>
            <p>{price} руб.</p>
          </div>
          <img
            width={32}
            height={32}
            onClick={addToCard}
            src={isItemAdded(id) ? "/img/cheked.svg" : "/img/plus.svg"}
            alt="Add to card"
          />
        </li>
      </ul>
    </div>
  );
}
