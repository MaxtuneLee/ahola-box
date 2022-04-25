import axios from "axios";

export default function LoginApi(username: string, password: string) {
  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  return axios({
    method: "post",
    url: "/api/login",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: formData,
  });
}
