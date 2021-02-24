import React, { useState } from "react";
import "./shop.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/config";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(auth.signInWithEmailAndPassword(email, password));
    console.log("====================================");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // login, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const resister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create a user and logged in , redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/shop">
        <img
          className="login__logo"
          src="./images/animat-diamond-color.gif"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password </h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to <strong>Szzin</strong> website Condition of
          seeing our Privacy notice, our Cookies Notice and our Notice
        </p>
        <button onClick={resister} className="login_registerButton">
          Create your Szzin Account
        </button>
      </div>
    </div>
  );
}

export default Login;
