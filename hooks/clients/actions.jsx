"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../useAxiosAuth";
import { getClientDetail, getClients } from "@/services/clients";

export function useFetchClients() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(axios),
  });
}

export function useFetchClientDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["client", slug],
    queryFn: () => getClientDetail(slug, axios),
    enabled: !!slug,
  });
}
