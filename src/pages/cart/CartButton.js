import React from "react";
import { useCartPage } from "../../context/CartPageContext";
import Button from "../../ui/Button";

function CartButton({ onSubmit }) {
  const { cartPageState, prePage, nextPage } = useCartPage();

  const createButton = (content, onClick) => {
    return (
      <Button className={"btn-primary py-2 px-3"} onClick={onClick}>
        {content}
      </Button>
    );
  };

  const createButtonDom = () => {
    const { nowPage, allPages } = cartPageState;
    if (nowPage === 0) {
      return createButton("下一頁", nextPage);
    } else if (nowPage > 0 && nowPage + 1 < allPages.length - 1) {
      return (
        <>
          {createButton("上一頁", prePage)}
          {createButton("下一頁", nextPage)}
        </>
      );
    } else if (nowPage === allPages.findIndex((page) => page === "資料確認")) {
      return (
        <>
          {createButton("上一頁", prePage)}
          {createButton("送出訂單", onSubmit)}
        </>
      );
    }
  };

  return createButtonDom();
}

export default CartButton;
