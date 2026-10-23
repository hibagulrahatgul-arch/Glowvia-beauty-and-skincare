import axios from "axios";

const API =axios.create({
  baseURL: "http://localhost:3000",
});
export async function customersignupaxiosfunction(data) {
  console.log("customersignup function called");
  return await API.post("/customersignup", data);
}
  