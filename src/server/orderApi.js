import axios from "axios";
import { GET_ORDERS, GET_ORDER_DETAIL } from "./config";

export const getOrders = async (memberId) => {
  const { data } = await axios.get(`${GET_ORDERS}/${memberId}`);
  return data;
};

export const getOrderDetail = async (orderId) => {
  const { data } = await axios.get(`${GET_ORDER_DETAIL}/${orderId}`);
  return data;
};
