import axios from "axios";

export const getOrders = () => {
  return axios.get("http://localhost:3001/orders");
};

export const createOrder = (items) => {
  axios.post("http://localhost:3001/orders", items);
};
