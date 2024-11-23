import { User } from "../_types/User";
import apiClient from "./apiService";

export const getUsers = async (page = 1, perPage = 10): Promise<User[]> => {
  const response = await apiClient.get("/users/query", {
    params: { page, per_page: perPage },
  });

  const users = response.data.data;

  console.log("Response from API:", users);
  return users.map((item: any) => ({
    id: item.id,
    name: item.attributes.profile.displayName || "N/A",
    email: item.attributes.email || "N/A",
    registrationDate: item.attributes.createdAt || "N/A",
  }));
};

export const getUsersByIds = async (userIds: string[]): Promise<User[]> => {
  try {
    const idsQuery = userIds.join(",");
    const response = await apiClient.get("/users/query", {
      params: { ids: idsQuery },
    });

    return response.data.data.map((item: any) => ({
      id: item.id,
      name: item.attributes.profile.displayName || "N/A",
      email: item.attributes.email || "N/A",
      userType: item.attributes.profile.publicData.userType || "N/A",
    }));
  } catch (error) {
    console.error("Error al obtener usuarios por IDs:", error);
    throw error;
  }
};
