import React from "react";
import RegisterHeader from "../RegisterHeader";
import LoginForm from "../LoginForm";
import "../../App.css";

function Login() {
  return (
    <div className="App">
      <RegisterHeader />
      <div className="container d-flex align-items-center flex-column">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
