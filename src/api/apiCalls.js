import api from "./api";

export const fetchHome = async () => {
  const response = await api.get("/");
  return response.data;
};

export const fetchInfluencer = async (name) => {
  const response = await api.get(`/influencer/${name}`);
  return response.data;
};

export const searchClaims = async (influencerName, options = {}) => {
  const payload = {
    influencer_name: influencerName,
    claims_per_influencer: options.claimsPerInfluencer || 50,
    include_revenue: options.includeRevenue || false,
    verify_with_journals: options.verifyWithJournals || false,
    journals: options.journals || [],
  };
  const response = await api.post("/search/", payload);
  return response.data;
};
