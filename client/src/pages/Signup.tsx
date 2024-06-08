import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signupForm = document.getElementById(
      "form"
    ) as HTMLFormElement | null;
    if (signupForm) {
      const signupData = new FormData(signupForm);
      const username = signupData.get("username");
      const password = signupData.get("password");
      const confirmPassword = signupData.get("confirm-password");
      console.log(password, confirmPassword);
      
      if (password!== confirmPassword) {
        alert("Passwords do not match");
        //replace with nice conditionally rendered text
        return;
      }
    }
  };
  return (
    <form
      className="max-w-96 mx-auto flex flex-col items-center justify-center"
      onSubmit={(e) => {
        handleSignUp(e);
      }}
      id="form"
    >
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          required
          type="text"
          className="form-control"
          placeholder="Last name"
        />
      </div>
      <div className="mb-3">
        <label>Username</label>
        <input
          required
          name="username"
          type="text"
          className="form-control"
          placeholder="Username"
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          required
          type="email"
          className="form-control"
          placeholder="Enter email"
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
      </div>
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          required
          name="confirm-password"
          type="password"
          className="form-control"
          placeholder="Confirm password"
        />
      </div>

      <div className="d-grid">
        <button id="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered? <a onClick={handleSignIn}>Sign in</a>
      </p>
    </form>
  );
};
