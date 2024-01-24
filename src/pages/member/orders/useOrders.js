import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../server/orderApi";

export const useOrders = (memberId) => {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders", memberId],
    queryFn: () => getOrders(memberId),
  });

  return { isLoading, error, orders };
};
