import queryString from "query-string";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { LINE_PAY_CONFIRM_API } from "../../server/config";
import { useEffect } from "react";

function LinepayConfirm() {
  const query = queryString.parse(useLocation().search);

  useEffect(() => {
    const checkPay = async () => {
      const result = await axios.post(LINE_PAY_CONFIRM_API, query);
      console.log(result);
      if (result.data === "success") {
        window.location = "http://localhost:3000/success";
      } else {
        window.location = "http://localhost:3000/fail";
      }
    };

    checkPay();
  }, [query]);

  //   console.log(query);

  return;
}

export default LinepayConfirm;
