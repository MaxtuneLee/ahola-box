import axios from "axios";

export default function Messages(){
    let formData = new FormData();
    formData.append("server_key", "#sdf674%3255$");
    return axios({
        method:'post',
        url:'/api/message/all',
        data:formData,
    })
}