import { Listing } from "../_types/Listing";
import apiClient from "./apiService";

export const getListings = async (
  page = 1,
  perPage = 10
): Promise<Listing[]> => {
  const response = await apiClient.get("/listings/query", {
    params: { page, per_page: perPage },
  });

  const listings = response.data.data;

  if (!Array.isArray(listings)) {
    throw new Error("Los datos no están en formato de lista");
  }

  return listings.map((item: any) => ({
    id: item.id,
    title: item.attributes?.title || "N/A",
    description: item.attributes?.description || "N/A",
    state: item.attributes?.state || "N/A",
    price: item.attributes?.price || null,
    location: item.attributes?.publicData?.location?.address || null,
    createdAt: item.attributes?.createdAt || "N/A",
  }));
};
