import axios from "axios";
import { LOG_IN_API } from "./config";

export const login = async (formData) => {
  const { data } = await axios.post(LOG_IN_API, formData);
  return data;
};
