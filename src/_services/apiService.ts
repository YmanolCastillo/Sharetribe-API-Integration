import axios from "axios";

const API_BASE_URL =
  "https://sharetribe-custom-backend-production.up.railway.app/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: Remover interceptor ya que el back hace el proceso del auth
// Interceptor para agregar el token dinámicamente
// apiClient.interceptors.request.use(async (config) => {
//   try {
//     const token = await getAccessToken();
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   } catch (error: any) {
//     console.error("Error al configurar la solicitud:", error.message);
//     throw error;
//   }
// });

export default apiClient;
