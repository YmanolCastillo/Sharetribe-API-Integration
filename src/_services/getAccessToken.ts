import axios from "axios";

const getAccessToken = async (): Promise<string> => {
  const tokenUrl = "https://flex-api.sharetribe.com/v1/auth/token";
  const clientId = process.env.REACT_APP_SHARETRIBE_CLIENT_ID!;
  const clientSecret = process.env.REACT_APP_SHARETRIBE_CLIENT_SECRET!;

  try {
    const response = await axios.post(
      tokenUrl,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error: any) {
    console.error(
      "Error fetching access token:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default getAccessToken;
