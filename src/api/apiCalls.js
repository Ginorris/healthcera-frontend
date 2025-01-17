import api from "./api";

export const fetchHome = async () => {
  const response = await api.get("/");
  return response.data;
};

export const fetchInfluencer = async (id) => {
  const response = await api.get(`/influencers/${id}`);
  return response.data;
};

export const addInfluencer = async (name) => {
  const response = await api.post("/influencers", { name });
  return response.data;
};
