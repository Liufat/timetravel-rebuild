import axios from "axios";

import { GET_FOODS_LIST, GET_FOOD_DETAIL } from "./config";

export const getFoods = async () => {
  const { data } = await axios.get(GET_FOODS_LIST);
  return data.rowsAll;
};

export const getFoodDetail = async (sid) => {
  const { data } = await axios.get(`${GET_FOOD_DETAIL}/${sid}`);
  const result = { ...data };

  return result;
};
