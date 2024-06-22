import axios from "axios";
import { FormEvent, MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";

export const Login = () => {
  const [isSending, setIsSending] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginForm = document.getElementById("form") as HTMLFormElement | null;
    if (loginForm) {
      const loginData = new FormData(loginForm);
      const username = loginData.get("username");
      const password = loginData.get("password");
      if (!username || !password) {
        alert("Please fill in all the fields");
        //replace this with conditionally rendered error or something
        return;
      }
      if (!isSending) {
        setIsSending(true);
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/token",
            loginData
          );
          localStorage.setItem(
            "auth",
            JSON.stringify({ ...response.data, username: username })
          );
          setUser({ username: username.toString() });
          setIsSending(false);

          navigate("/");
        } catch (err) {
          console.log(err);
          setIsSending(false);
        }
      }
    
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleLogin(e);
      }}
      id="form"
      className="max-w-96 mx-auto flex flex-col items-center justify-center"
    >
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Username</label>
        <input
        required
          name="username"
          type="text"
          className="form-control"
          placeholder="Enter username"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
        required
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
        <p className="self-end">
          Forgot <a href="#">password?</a>
        </p>
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="remember-me"
          />
          <label className="custom-control-label" htmlFor="remember-me">
            Remember me
          </label>
          {/* ^ this doesn't do anything at the moment / is enabled by default */}
        </div>
      </div>

      <div className="d-grid">
        <button id="submit" className="btn btn-primary">
          Log in
        </button>
      </div>
      <p className="">
        <a onClick={handleSignup}>Create a new account</a>
      </p>
    </form>
  );
};
