import axios from "axios";
import { SUBMIT_COMMENT_API } from "./config";

export const makeComment = (commentData) => {
  const { data } = axios.post(SUBMIT_COMMENT_API, commentData);
  return data;
};
