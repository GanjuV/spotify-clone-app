import React from "react";
import "./Login.css";
import { loginURL } from "./spotify";

function Login() {
  return (
    <div className="login">
      login
      <img
        src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif"
        alt=""
      />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
