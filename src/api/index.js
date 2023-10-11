import { baseUrl } from "@/utils";

export const apiService = ({ endpoint, data, method = "GET" }) => {
  const url = `${baseUrl}${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
