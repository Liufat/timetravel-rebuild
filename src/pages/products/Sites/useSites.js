import { useQuery } from "@tanstack/react-query";
import { getSites } from "../../../server/sitesApi";

export function useSites() {
  const {
    isLoading,
    data: sites,
    error,
  } = useQuery({
    queryKey: ["sites"],
    queryFn: getSites,
  });
  return { isLoading, sites, error };
}
