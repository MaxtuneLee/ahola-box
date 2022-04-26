import axios from "axios";

export default function UserDataApi(uid:number){
    let formData = new FormData();
    formData.append("id", uid.toString());
    formData.append("server_key", "#sdf674%3255$");
    return axios({
        method: "post",
        url: "/api/users",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: formData,
    });
}