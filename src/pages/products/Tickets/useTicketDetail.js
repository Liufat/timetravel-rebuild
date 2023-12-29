import { useQuery } from "@tanstack/react-query";
import { getTicketDetail } from "../../../server/ticketsApi";

export const useTicketDetail = (sid) => {
  const {
    isLoading,
    data: ticketDetail,
    error,
  } = useQuery({
    queryKey: ["tickets", sid],
    queryFn: () => getTicketDetail(sid),
  });

  return { isLoading, error, ticketDetail };
};
