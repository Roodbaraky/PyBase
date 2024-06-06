"use client";

import axios from "axios";
import { FormEvent, MouseEvent, use, useState } from "react";

export default function Home() {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const getToken = async (userData: FormData) => {
    try {
      console.log('working')
      const response = await axios.post("http://127.0.0.1:8000/token", userData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogin = async (loginData: FormData) => {
    const username = loginData.get("username");
    const password = loginData.get("password");

    const userData = new FormData();
    userData.append("username", username as string);
    userData.append("password", password as string);
    console.log('userData pre-->',userData)
    await getToken(userData);

    console.log({ username, password });
    setLoginUser({ username: "", password: "" });
    (document.getElementById("login") as HTMLDialogElement).close();
  };

  const handleSignup = (signupData: FormData) => {
    const username = signupData.get("username");
    const password = signupData.get("password");
    const email = signupData.get("email");
    //replace with API POST request
    console.log({ username, password, email });
    setSignupUser({ username: "", password: "", email: "" });
    (document.getElementById("signup") as HTMLDialogElement).close();
  };

  return (
    <main
      id="landing-page"
      className="flex min-h-screen flex-col items-center justify-center p-24 border border-pink"
    >
      <section className="flex flex-col items-center justify-evenly  bg-base-100 w-5/6 h-screen rounded-xl">
        <h1 className=" ">Hello.</h1>
        <div className="flex gap-4">
          <button
            className="btn"
            onClick={() =>
              (
                document.getElementById("signup") as HTMLDialogElement
              ).showModal()
            }
          >
            Sign up
          </button>
          <dialog id="signup" className="modal">
            <div className="modal-box py-0 m-0">
              <div className="modal-action size-full py-0">
                <form
                  method="dialog"
                  className="flex justify-between size-full py-0"
                >
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <button className="btn self-end">[x]</button>
                </form>
              </div>
              <form
                action={handleSignup}
                className="flex flex-col items-center gap-2"
              >
                <label htmlFor="login-username">
                  <p>Username: </p>
                  <input
                    type="text"
                    name="username"
                    value={signupUser.username}
                    onChange={(e) => {
                      setSignupUser({
                        ...signupUser,
                        username: e.target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="login-password">
                  <p>Email: </p>
                  <input
                    type="text"
                    name="email"
                    value={signupUser.email}
                    onChange={(e) => {
                      setSignupUser({
                        ...signupUser,
                        password: e.target.value,
                      });
                    }}
                  />
                </label>
                <label htmlFor="login-password">
                  <p>Password: </p>
                  <input
                    type="text"
                    name="password"
                    value={signupUser.password}
                    onChange={(e) => {
                      setSignupUser({
                        ...signupUser,
                        password: e.target.value,
                      });
                    }}
                  />
                </label>
                <button className="btn" type="submit">
                  Sign up
                </button>
              </form>
              <div className="modal-action"></div>
            </div>
          </dialog>

          <button
            className="btn"
            onClick={() =>
              (
                document.getElementById("login") as HTMLDialogElement
              ).showModal()
            }
          >
            Log in
          </button>
          <dialog id="login" className="modal">
            <div className="modal-box py-0">
              <div className="modal-action size-full">
                <form
                  method="dialog"
                  className="flex justify-between size-full"
                >
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <button className="btn self-end">[x]</button>
                </form>
              </div>
              <form
                action={handleLogin}
                className="flex flex-col items-center gap-2"
              >
                <label htmlFor="login-username">
                  <p>Username: </p>
                  <input
                    type="text"
                    name="username"
                    value={loginUser.username}
                    onChange={(e) => {
                      setLoginUser({ ...loginUser, username: e.target.value });
                    }}
                  />
                </label>
                <label htmlFor="login-password">
                  <p>Password: </p>
                  <input
                    type="text"
                    name="password"
                    value={loginUser.password}
                    onChange={(e) => {
                      setLoginUser({ ...loginUser, password: e.target.value });
                    }}
                  />
                </label>
                <button className="btn" type="submit">
                  Log in
                </button>
              </form>
              <div className="modal-action"></div>
            </div>
          </dialog>
        </div>
      </section>
    </main>
  );
}
