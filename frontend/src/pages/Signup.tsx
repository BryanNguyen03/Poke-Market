import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import "../styles/forms.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent refresh (which is default behaviour when submitting a form)
    e.preventDefault();

    // sign the user up
    await signup(email, password);
  };

  return (
    <div className="formContainer">
      <form className="signup" onSubmit={handleSubmit}>
        <h3> Sign up </h3>

        <label>Email: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading}>Sign up</button>
        <div className="linkToLogin">
          <label>Already have an account?</label>
          <Link to="/login">Log in!</Link>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
