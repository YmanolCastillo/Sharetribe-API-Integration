import apiClient from "./apiService";
import { Transaction } from "../_types/Transaction";

export const getTransactions = async (
  page = 1,
  perPage = 10
): Promise<Transaction[]> => {
  try {
    const response = await apiClient.get("/transactions", {
      params: { page, per_page: perPage },
    });

    const transactions = response.data;

    return transactions;
  } catch (error) {
    console.error("Error al obtener las transacciones:", error);
    throw error;
  }
};
