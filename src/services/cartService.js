import axios from "axios";

const postCart = (items) => {
  axios.post("http://localhost:3001/cartItems", items);
};
const getCartItems = () => {
  return axios.get("http://localhost:3001/cartItems");
};
const deleteFromCart = (id) => {
  axios.delete(`http://localhost:3001/cartItems/${id}`);
};

export { postCart, getCartItems, deleteFromCart };
