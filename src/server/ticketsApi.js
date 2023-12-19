import axios from "axios";
import { GET_TICKETS_LIST } from "./config";

export const getTickets = async () => {
  const { data } = await axios.get(GET_TICKETS_LIST);
  return data.rowsAll;
};
