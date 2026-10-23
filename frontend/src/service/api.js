import axios from "axios";

export async function adminLogin(data) {
  console.log("adminLogin function called");
  return await axios.post("http://localhost:3000/admin/admin-login", data);
}