import axios from "axios";
import getAccessToken from "./getAccessToken";

const API_BASE_URL = "https://flex-api.sharetribe.com/v1/integration_api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token dinámicamente
apiClient.interceptors.request.use(async (config) => {
  try {
    const token = await getAccessToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  } catch (error: any) {
    console.error("Error al configurar la solicitud:", error.message);
    throw error;
  }
});

export default apiClient;
