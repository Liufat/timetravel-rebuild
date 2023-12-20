import axios from "axios";
import { GET_SITES_LIST } from "./config";

export const getSites = async () => {
  const { data } = await axios.get(GET_SITES_LIST);
  return data.rowsAll;
};
