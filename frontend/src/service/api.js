

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

export async function customersignupaxiosfunction(data) {
  const res = await API.post("/customersignup", data);
  return res.data;
}

export async function adminLogin(data) {
  console.log("adminLogin function called");
  const res = await API.post("/admin/admin-login", data);
  return res.data;
}
  