import { useQuery } from "@tanstack/react-query";
import { getFoods } from "../../../server/foodsApi";

export function useFoods() {
  const {
    isLoading,
    data: foods,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
  });

  return { isLoading, error, foods };
}
