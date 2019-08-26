const { NODE_ENV } = process.env;
const BASE_URL = NODE_ENV === "development" ? "http://localhost:5000" : "tbd";

export const login = async user => {
  const response = await fetch(`${BASE_URL}/api/login`, {
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  const json = await response.json();
  return json;
};

export const signup = async user => {
  const response = await fetch(`${BASE_URL}/api/signup`, {
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  const json = await response.json();
  return json;
};
