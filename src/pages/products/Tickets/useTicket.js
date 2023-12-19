import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../../../server/ticketApi";

export const useTicket = () => {
  const {
    isLoading,
    data: tickets,
    error,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  return { isLoading, error, tickets };
};
