

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

export async function customerLogin(data) {
  const res = await API.post("/customerlogin", data);
  return res.data;
}

export async function addProductAxiosFunction(data) {
  const res = await API.post("/products", data);
  return res.data;
}

export async function updateProductAxiosFunction(name, data) {
  const res = await API.put(`/products/${encodeURIComponent(name)}`, data);
  return res.data;
}

export async function deleteProductAxiosFunction(name) {
  const res = await API.delete(`/products/${encodeURIComponent(name)}`);
  return res.data;
}

export async function placeOrderAxiosFunction(data) {
  const res = await API.post("/orders", data);
  return res.data;
}

export async function pickupOrderAxiosFunction(orderId) {
  const res = await API.put(`/orders/${encodeURIComponent(orderId)}/pickup`);
  return res.data;
}

export async function deliverOrderAxiosFunction(orderId, data) {
  const res = await API.put(`/orders/${encodeURIComponent(orderId)}/deliver`, data);
  return res.data;
}

export async function submitComplaintAxiosFunction(data) {
  const res = await API.post("/complaints", data);
  return res.data;
}

export async function updateComplaintAxiosFunction(complaintId, status) {
  const res = await API.put(`/complaints/${encodeURIComponent(complaintId)}`, { status });
  return res.data;
}

export async function deleteComplaintAxiosFunction(complaintId) {
  const res = await API.delete(`/complaints/${encodeURIComponent(complaintId)}`);
  return res.data;
}

export async function addMembershipAxiosFunction(data) {
  const res = await API.post("/memberships", data);
  return res.data;
}

export async function updateMembershipAxiosFunction(memberId, data) {
  const res = await API.put(`/memberships/${encodeURIComponent(memberId)}`, data);
  return res.data;
}

export async function getAllComplaintsAxiosFunction() {
  const res = await API.get("/complaints");
  return res.data;
}

export async function getAllOrdersAxiosFunction() {
  const res = await API.get("/orders");
  return res.data;
}