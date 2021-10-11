import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getCartItems, postCart, deleteFromCart } from "./services/cartService";
import {
  getFavorites,
  postToFavorites,
  deleteFromFavorites,
} from "./services/favItemsService";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

import Main from "./pages/Main";
import Orders from "./pages/Orders";
import WishList from "./pages/WishList";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  useEffect(() => {
    getCartItems().then((res) => setCartItems(res.data));
    getFavorites().then((res) => setWishListItems(res.data));
    const body = document.querySelector("body");
    body.style.overflow = cartIsOpen ? "hidden" : "";
  }, [cartIsOpen]);

  const toggleCart = () => {
    setCartIsOpen((prev) => !prev);
  };

  const removeItem = async (id) => {
    try {
      deleteFromCart(id);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };
  const addToCart = async (item) => {
    try {
      if (!cartItems.some((cartItem) => cartItem.id === item.id)) {
        await postCart(item);
        setCartItems((prev) => [...prev, item]);
      } else {
        await deleteFromCart(item.id);
        setCartItems((prev) =>
          prev.filter((cartItem) => cartItem.id !== item.id)
        );
      }
    } catch (e) {
      alert(e.message);
    }
  };
  const addToWishList = async (item) => {
    try {
      if (
        !wishListItems.some((wishListItems) => wishListItems.id === item.id)
      ) {
        await postToFavorites(item);
        setWishListItems((prev) => [...prev, item]);
      } else {
        await deleteFromFavorites(item.id);
        setWishListItems((prev) =>
          prev.filter((wishItem) => wishItem.id !== item.id)
        );
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };
  const isItemLiked = (id) => {
    return wishListItems.some((item) => item.id === id);
  };

  const sumOfOrder = cartItems.reduce((sum, currItem) => {
    return sum + currItem.price;
  }, 0);

  const charge = sumOfOrder * 0.05;
  const totalSum = sumOfOrder + charge;
  return (
    <Router>
      <div className="wrapper">
        <Header totalSum={totalSum} toggle={toggleCart} />
        {cartIsOpen && (
          <Cart
            remove={removeItem}
            items={cartItems}
            closeCart={toggleCart}
            totalSum={totalSum}
            charge={charge}
            setCartItems={setCartItems}
          />
        )}
        <Switch>
          <Route exact path="/wishlist">
            <WishList
              favorites={wishListItems}
              addToCart={addToCart}
              deleteFromWishList={addToWishList}
              isItemAdded={isItemAdded}
              isItemLiked={isItemLiked}
            />
          </Route>
          <Route exact path="/orders">
            <Orders closeCart={toggleCart} />
          </Route>
          <Route exact path="/">
            <Main
              addToCart={addToCart}
              addToWishList={addToWishList}
              isItemAdded={isItemAdded}
              isItemLiked={isItemLiked}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
