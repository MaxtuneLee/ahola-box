import axios from "axios"

export default function SendMessage(text){
    let formData = new FormData()
    formData.append("message", text)
    formData.append("server_key", "#sdf674%3255$")
    formData.append("access_token", localStorage.getItem("token"))
    return axios({
        method: "post",
        url: "/api/message/send",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: formData,
    })
}