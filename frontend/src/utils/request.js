import axios from "axios";
// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:8181/api";

export default async function request(method = "get", endpoint, data = null) {
  const item = window.localStorage.getItem("currentUser");
  const currentUser = item ? await JSON.parse(item) : null;
  try {
    return await axios.request({
      method,
      baseURL: baseUrl,
      url: endpoint,
      headers: {
        Authorization: `Token ${currentUser ? currentUser.token : null}`,
      },
      data,
    });
  } catch (e) {
    console.error("Request error: ", e);
    throw e;
  }
}
