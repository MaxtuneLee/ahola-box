import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Index";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(localStorage.getItem("token"))
    if(localStorage.getItem("token")===null){
      navigate("/login")
    }
  },[])
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
