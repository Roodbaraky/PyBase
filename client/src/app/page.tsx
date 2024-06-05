"use client"

import { TokenContext, UserContext } from "@/context/User";
import axios from "axios";
import { headers } from "next/headers";
import { FormEvent, MouseEvent, useContext, useEffect, useState } from "react";

export default function Home() {

  const [loginUser, setLoginUser] = useState({ username: '', password: '' })
  const [signupUser, setSignupUser] = useState({ username: '', password: '', email: '' })
  const { user, setUser } = useContext(UserContext) ?? { user: null, setUser: () => { } };
  const { token, setToken } = useContext(TokenContext) ?? { token: null, setToken: () => { } };


  async function sendLogin(loginData: FormData) {
    console.log(loginData)
    try {
      const response = await axios.postForm('http://127.0.0.1:8000/token', loginData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: loginData, // Use the data option to specify the request body
      })
      setToken(response.data.access_token)
      console.log(response.data.access_token)
      try {
        const response2 = await axios.get('http://127.0.0.1:8000/users/me', {
          headers: {
            "Authorization": `Bearer ${response.data.access_token}`,
          },
  
        })
        console.log(response2.data)
      } catch (error) {
        console.log(error)
      }
    } catch (error) {

      console.log(error)

    }
  }



  const handleNextReq = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/users/me', {
        headers: {
          "Authorization": `Bearer ${token}`,
        },

      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (loginData: FormData) => {
    const username: FormDataEntryValue = loginData.get('username')
    const password: FormDataEntryValue = loginData.get('password')
    //replace with API POST request
    const form = document.querySelector('user-info') as HTMLFormElement

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    await sendLogin(formData)
    setLoginUser({ username: '', password: '' });
    (document.getElementById('login') as HTMLDialogElement).close()
  }

  const handleSignup = (signupData: FormData) => {
    const username = signupData.get('username')
    const password = signupData.get('password')
    const email = signupData.get('email')
    //replace with API POST request


    console.log({ username, password, email })
    setSignupUser({ username: '', password: '', email: '' });
    (document.getElementById('signup') as HTMLDialogElement).close()
  }


  return (
    <main id='landing-page' className="flex min-h-screen flex-col items-center justify-center p-24 border border-pink">
      <section className="flex flex-col items-center justify-evenly  bg-base-100 w-5/6 h-screen rounded-xl">
        <h1 className=" ">Hello.</h1>
        {token?.length !== 0 ? <button onClick={handleNextReq}>FastApiTest</button> : <></>}
        <div className="flex gap-4">



          <button className="btn" onClick={() => (document.getElementById('signup') as HTMLDialogElement).showModal()}>Sign up</button>
          <dialog id="signup" className="modal">
            <div className="modal-box py-0 m-0">
              <div className="modal-action size-full py-0">
                <form method="dialog" className="flex justify-between size-full py-0">
                  <h3 className="font-bold text-lg">Hello!</h3>s
                  <button className="btn self-end">[x]</button>

                </form>
              </div>
              <form id='user-info' action={handleSignup} className="flex flex-col items-center gap-2">
                <label htmlFor="login-username"><p>Username: </p><input type="text" name="username" value={signupUser.username} onChange={(e) => { setSignupUser({ ...signupUser, username: e.target.value }) }} /></label>
                <label htmlFor="login-email"><p>Email: </p><input type="text" name="email" value={signupUser.email} onChange={(e) => { setSignupUser({ ...signupUser, email: e.target.value }) }} /></label>
                <label htmlFor="login-password"><p>Password: </p><input type="password" name="password" value={signupUser.password} onChange={(e) => { setSignupUser({ ...signupUser, password: e.target.value }) }} /></label>
                <button className="btn" type="submit">Sign up</button>
              </form>
              <div className="modal-action">


              </div>
            </div>
          </dialog>

          <button className="btn" onClick={() => (document.getElementById('login') as HTMLDialogElement).showModal()}>Log in</button>
          <dialog id="login" className="modal">
            <div className="modal-box py-0">
              <div className="modal-action size-full">
                <form method="dialog" className="flex justify-between size-full">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <button className="btn self-end">[x]</button>

                </form>
              </div>
              <form action={handleLogin} className="flex flex-col items-center gap-2">
                <label htmlFor="login-username"><p>Username: </p><input type="text" name="username" value={loginUser.username} onChange={(e) => { setLoginUser({ ...loginUser, username: e.target.value }) }} /></label>
                <label htmlFor="login-password"><p>Password: </p><input type="text" name="password" value={loginUser.password} onChange={(e) => { setLoginUser({ ...loginUser, password: e.target.value }) }} /></label>
                <button className="btn" type="submit">Log in</button>
              </form>
              <div className="modal-action">


              </div>
            </div>
          </dialog>

        </div>
      </section>
    </main>
  );
}
