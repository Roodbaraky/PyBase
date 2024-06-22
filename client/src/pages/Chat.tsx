import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Chat() {
  const params = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("auth");
  useEffect(()=>{

      if (!token) {
        navigate("/login");
      }
  })


  return (
    <>
      <div>Chat</div>
      <div>{params.chatId}</div>
    </>
  );
}
