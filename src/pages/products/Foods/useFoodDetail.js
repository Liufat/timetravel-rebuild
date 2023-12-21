import { useQuery } from "@tanstack/react-query";
import { getFoodDetail } from "../../../server/foodsApi";

export function useFoodDetail(sid) {
  const {
    isLoading,
    isSuccess,
    data: foodDetail,
    error,
  } = useQuery({
    queryKey: ["foodDetail", sid],
    queryFn: () => getFoodDetail(sid),
  });

  return { isLoading, error, foodDetail, isSuccess };
}
