import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContext } from "./context/context";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Chat from "./pages/Chat";


 function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      <Router>
        <main id="app-container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat/:chatId" element={<Chat/>}/>
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
