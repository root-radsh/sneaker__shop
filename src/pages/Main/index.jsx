import React, { useEffect, useState } from "react";

import styles from "./Main.module.scss";
import SneakerItem from "../../components/SneakerItem/SneakerItem";
import { Loader } from "../../components/Loader";

import getSneakersItems from "../../services/sneakersService";
import { Spinner } from "../../components/Spinner";

export default function Main({
  addToCart,
  addToWishList,
  added,
  liked,
  isItemAdded,
  isItemLiked,
}) {
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getSneakersItems().then((res) => setSneakers(res.data));
  }, []);
  const renderItems = () => {
    return sneakers.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
  return (
    <div className={styles.content}>
      <Spinner/>
      <div className={styles.content__header}>
        <h1>Все кроссовки</h1>
        <div className={styles.searchWrapper}>
          <div className={styles.searchBlock}>
            <img width={15} height={15} src="/img/search.svg" alt="Search" />
            <input
              placeholder="Поиск..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {searchValue && <h2>Поиск "{searchValue}"</h2>}
        </div>
      </div>
      <div className={styles.content__sneakers}>
        {renderItems().length > 0
          ? renderItems().map((item) => {
              return (
                <SneakerItem
                  key={item.id}
                  {...item}
                  addItemToCart={addToCart}
                  addToWishList={addToWishList}
                  added={added}
                  liked={liked}
                  isItemAdded={isItemAdded}
                  isItemLiked={isItemLiked}
                />
              );
            })
          : [...Array(8)].map((item, index) => {
              return <Loader key={index} />;
            })}
      </div>
    </div>
  );
}
