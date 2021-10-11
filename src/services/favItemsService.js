import axios from "axios";

export const getFavorites = async () => {
  return await axios.get("http://localhost:3001/favoritesItems");
};

export const postToFavorites = async (item) => {
  await axios.post("http://localhost:3001/favoritesItems", item);
};
export const deleteFromFavorites = async (id) => {
  await axios.delete(`http://localhost:3001/favoritesItems/${id}`);
};
