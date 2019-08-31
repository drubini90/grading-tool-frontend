const { REACT_APP_API_DOMAIN } = process.env;
const BASE_URL = REACT_APP_API_DOMAIN;

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
