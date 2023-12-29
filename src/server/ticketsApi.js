import axios from "axios";
import { GET_TICKETS_LIST, GET_TICKET_DETAIL } from "./config";

export const getTickets = async () => {
  const { data } = await axios.get(GET_TICKETS_LIST);
  return data.rowsAll;
};

export const getTicketDetail = async (sid) => {
  const { data } = await axios.get(`${GET_TICKET_DETAIL}/${sid}`);
  const ticketsData = await axios.get(`${GET_TICKET_DETAIL}/${sid}/types`);
  const result = { ...data, tickets: ticketsData.data };
  return result;
};
