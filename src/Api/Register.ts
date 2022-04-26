import axios from "axios";

export default function RegisterApi(username:string, password:string, email:string) {
  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("email", email);
  formData.append("server_key", "#sdf674%3255$");
  return axios({
    method: "post",
    url: "/api/register",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: formData,
  });
}