import React, { useState } from "react";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //check for auth token
  const [showLogin, setShowLogin] = useState(true);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    e.preventDefault()
    }
    
  return (
    <Router>
      {!isLoggedIn&&(showLogin ? <Login/> : <Signup />)}
      {isLoggedIn && <main></main>}
    </Router>
  );
}

export default App;
