import axios from "axios";

import { GET_FOODS_LIST } from "./config";

export const getFoods = async () => {
  const { data } = await axios.get(GET_FOODS_LIST);

  return data;
};
