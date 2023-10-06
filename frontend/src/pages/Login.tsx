import { useState } from "react";
import "../styles/App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent refresh (which is default behaviour when submitting a form)
    e.preventDefault();
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

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
