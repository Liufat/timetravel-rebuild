import axios from "axios";

import { MAKE_ORDER } from "./config";

export const makeOrder = async (orderData) => {
  const { data } = await axios.post(MAKE_ORDER, orderData);
  return data;
};
