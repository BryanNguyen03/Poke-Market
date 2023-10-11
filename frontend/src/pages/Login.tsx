import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import "../styles/forms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent refresh (which is default behaviour when submitting a form)
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="formContainer">
      <form className="login" onSubmit={handleSubmit}>
        <h3> Log in </h3>

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

        <button disabled={isLoading}>Log in</button>
        <div className="linkToSignup">
          <label>Don't have an account?</label>
          <Link to="/signup">Sign up!</Link>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
