export const MY_HOST = "http://localhost:3001";

// 會員相關
export const LOG_IN_API = `${MY_HOST}/member/api/login-api`;
// 產品相關

export const ITEMS_PER_PAGE = 6;

// 美食總表
export const GET_FOODS_LIST = `${MY_HOST}/food/api`;
export const GET_FOOD_DETAIL = `${MY_HOST}/food/item`;
// 評論
export const GET_FOOOD_COMMENT = `${MY_HOST}/food/food/detail/commit`;

// 票券總表
export const GET_TICKETS_LIST = `${MY_HOST}/ticket/api/list`;
export const GET_TICKET_DETAIL = `${MY_HOST}/ticket/item`;

// 住宿總表
export const GET_HOTELS_LIST = `${MY_HOST}/hotel/api`;
export const GET_HOTEL_DETAIL = `${MY_HOST}/hotel/item`;

// 行程總表
export const GET_SITES_LIST = `${MY_HOST}/site/api/list`;

// 訂單
export const MAKE_ORDER_API = `${MY_HOST}/cart/api/makeorder`;

//結帳流程
//獲取指定訂單編號的資料-LINE PAY
export const LINE_PAY_API = function (paymentId) {
  return `${MY_HOST}/pay/api/paylist/${paymentId}`;
};
//確認訂單是否結帳成功
export const LINE_PAY_CONFIRM_API = `${MY_HOST}/pay/api/paycheck`;

//獲取指定訂單編號的資料-綠界
export const ECPAY_API = function (paymentId) {
  return `${MY_HOST}/pay/api/ecpay/${paymentId}`;
};

//更改訂單付款狀態
export const CHANGE_PAY_API = `${MY_HOST}/pay/api/change-pay`;

//收取綠界api回報的付款狀態
export const CHANGE_ECPAY_API = `${MY_HOST}/pay/api/ecpay-change-state`;

//訂單
export const GET_ORDERS = `${MY_HOST}/orders/api/list`;
export const GET_ORDER_DETAIL = `${MY_HOST}/orders/api/list/orderdetail`;
