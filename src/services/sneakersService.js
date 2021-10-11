import axios from "axios";

const getSneakersItems = () => {
  return axios.get("http://localhost:3001/allItems");
};
export default getSneakersItems;
