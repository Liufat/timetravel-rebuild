const useCartFilter = (cartState, type) => {
  return cartState.cartItems.filter((item) => item.type === type);
};

export default useCartFilter;
