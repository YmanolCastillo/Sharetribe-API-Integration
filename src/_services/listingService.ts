import { Listing } from "../_types/Listing";
import apiClient from "./apiService";

export const getListings = async (
  page = 1,
  perPage = 10
): Promise<Listing[]> => {
  try {
    const response = await apiClient.get("/listings", {
      params: { page, per_page: perPage },
    });

    const listings = response.data;

    if (!Array.isArray(listings)) {
      throw new Error("Los datos no están en formato de lista");
    }

    return listings;
  } catch (error) {
    console.error("Error al obtener los listados:", error);
    throw error;
  }
};
