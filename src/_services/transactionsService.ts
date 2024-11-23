import apiClient from "./apiService";
import { Transaction } from "../_types/Transaction";
import { getUsersByIds } from "./userService";

export const getTransactions = async (
  page = 1,
  perPage = 10
): Promise<Transaction[]> => {
  const response = await apiClient.get("/transactions/query", {
    params: { page, per_page: perPage },
  });

  const transactions = response.data.data;

  const buyerIds = transactions
    .map((t: any) => t.attributes?.protectedData?.buyer)
    .filter(Boolean);
  const sellerIds = transactions
    .map((t: any) => t.attributes?.protectedData?.seller)
    .filter(Boolean);

  const uniqueUserIds = Array.from(new Set([...buyerIds, ...sellerIds]));

  // Obtener información de usuarios
  const users = await getUsersByIds(uniqueUserIds);

  // Crear un map para acceso rápido
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as Record<string, { id: string; name: string; email: string; userType: string }>);

  console.log(transactions);
  // Popular las transacciones con datos de usuarios
  return transactions.map((item: any) => ({
    id: item.id,
    buyer: userMap[item.attributes?.protectedData?.buyer] || { name: "N/A" },
    seller: userMap[item.attributes?.protectedData?.seller] || { name: "N/A" },
    status:
      item.attributes.lastTransition === "transition/inquire-without-payment"
        ? "pending"
        : item.attributes.lastTransition || "N/A",
    createdAt: item.attributes.createdAt || "N/A",
  }));
};
