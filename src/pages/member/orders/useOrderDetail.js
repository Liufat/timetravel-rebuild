import { useQuery } from "@tanstack/react-query";
import { getOrderDetail } from "../../../server/orderApi";

export const useOrderDetail = (orderId) => {
  const {
    isLoading,
    data: orderDetail,
    error,
  } = useQuery({
    queryKey: ["orderDetail", orderId],
    queryFn: () => getOrderDetail(orderId),
  });

  return { isLoading, error, orderDetail };
};
