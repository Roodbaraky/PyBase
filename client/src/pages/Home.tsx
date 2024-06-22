import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";


function Home(){
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (!token) {
      navigate("/login");
    }
  });

const handleLogout = () => {
localStorage.removeItem("auth");
navigate("/login");
}

  return (
   <main className="flex flex-col">
      <div className="text-5xl text-center m-8">Welcome :)</div>
      <div className="text-2xl text-center m-8">Nice to see you again {user.username}</div>
      <button className="btn self-center" onClick={handleLogout}>Log out</button>
   </main>
  )
}
export default Home