import { useQuery } from "@tanstack/react-query";
import { getHotelDetail } from "../../../server/hotelsApi";

export const useHotelDetail = (sid) => {
  const {
    isLoading,
    data: hotelDetail,
    error,
  } = useQuery({
    queryKey: ["hotelDetail", sid],
    queryFn: () => getHotelDetail(sid),
  });

  return { isLoading, error, hotelDetail };
};
