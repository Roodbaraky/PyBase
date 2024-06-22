import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import axios from "axios";
interface Token {
  access_token: string;
  token_type: string;
  username: string;
}

function Home() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserFromToken(token: Token) {
      try {
        const response = await axios.get("http://127.0.0.1:8000/users/me", {
          headers: {
            Authorization: `${token.token_type} ${token.access_token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    // console.log("infinite loop check");
    const token = localStorage.getItem("auth");
    if (!token) {
      navigate("/login");
    } else {
      if (!user.username) {
        getUserFromToken(JSON.parse(token));
      }
    }
  }, [navigate, setUser, user]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <main className="flex flex-col">
      <div className="text-5xl text-center m-8">Welcome :)</div>
      <div className="text-2xl text-center m-8">
        Nice to see you again {user.username}
      </div>
      <button className="btn self-center" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}
export default Home;
