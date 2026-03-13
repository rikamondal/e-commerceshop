import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./AuthModal.css";

const AuthModal = ({ close }) => {
  const { login, register } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (isLogin) {
      login(email, password);
    } else {
      register(name, email, password);
    }

    close();
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">

        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p>
          {isLogin ? "New user?" : "Already have account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="auth-switch"
          >
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

        <button className="auth-close" onClick={close}>X</button>

      </div>
    </div>
  );
};

export default AuthModal;