import axios from "axios";
import { GET_HOTELS_LIST } from "./config";

export const getHotels = async () => {
  const { data } = await axios.get(GET_HOTELS_LIST);
  return data.rows;
};
