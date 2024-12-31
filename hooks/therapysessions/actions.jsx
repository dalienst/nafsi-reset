"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../useAxiosAuth";
import {
  getTherapySessionDetail,
  getTherapySessions,
  getTherapySessionsByDate,
} from "@/services/therapysessions";

export function useFetchTherapySessions() {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["therapysessions"],
    queryFn: () => getTherapySessions(axios),
  });
}

export function useFetchTherapySessionDetail(slug) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["therapysession", slug],
    queryFn: () => getTherapySessionDetail(slug, axios),
    enabled: !!slug,
  });
}

export function useFetchTherapySessionsByDate(date) {
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["therapysessions", date],
    queryFn: () => getTherapySessionsByDate(axios, date),
  });
}
