import * as storge from "../helpers/local-storage";

const { NODE_ENV } = process.env;
const BASE_URL = NODE_ENV === "development" ? "http://localhost:5000" : "tbd";

export default async (path, { body = null, method = "GET" } = {}) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storge.getUserInfo().token}`
    },
    method
  };
  if (body) Object.assign(options, { body: JSON.stringify(body) });

  const response = await fetch(`${BASE_URL}${path}`, options);
  const json = await response.json();

  return json;
};
