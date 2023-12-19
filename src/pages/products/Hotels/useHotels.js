import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../../server/hotelsApi";

export const useHotels = () => {
  const {
    isLoading,
    data: hotels,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  return { isLoading, error, hotels };
};
