"use client";

import { apiActions } from "@/tools/api";

export const getTherapySessions = async (axios) => {
  const response = await apiActions?.get("/api/therapysessions/", axios);
  return response?.data?.results || [];
};

export const getTherapySessionDetail = async (slug, axios) => {
  const response = await apiActions?.get(
    `/api/therapysessions/${slug}/`,
    axios
  );
  return response?.data || {};
};

export const createTherapySession = async (values, axios) => {
  await apiActions?.post("/api/therapysessions/", values, axios);
};

export const updateTherapySession = async (slug, formData, axios) => {
  await apiActions?.patch(`/api/therapysessions/${slug}/`, formData, axios);
};
