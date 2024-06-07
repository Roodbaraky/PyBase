import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [isSending, setIsSending] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const submitter = document.getElementById("submit");
    const loginData = new FormData(form, submitter);
    // const username = loginData.get("username");
    // const password = loginData.get("password");
    if (!isSending) {
        setIsSending(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/token",
          loginData
        );
        console.log(response.data);
        localStorage.setItem('auth', JSON.stringify(response.data));
        setIsSending(false)
      } catch (err) {
        console.log(err);
        setIsSending(false)
      }
    }
    console.log("userData pre-->", loginData);
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
          name="username"
          type="text"
          className="form-control"
          placeholder="Enter username"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={loginUser.password}
          onChange={(e) => {
            setLoginUser({ ...loginUser, password: e.target.value });
          }}
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
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button id="submit" className="btn btn-primary">
          Log in
        </button>
      </div>
      <p className="">
        <a>Create a new account</a>
      </p>
    </form>
  );
};
