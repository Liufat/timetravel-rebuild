import axios from "axios";
import { GET_HOTELS_LIST, GET_HOTEL_DETAIL } from "./config";

export const getHotels = async () => {
  const { data } = await axios.get(GET_HOTELS_LIST);
  return data.rowsAll;
};
export const getHotelDetail = async (sid) => {
  const { data } = await axios.get(`${GET_HOTEL_DETAIL}/${sid}`);

  return data;
};
