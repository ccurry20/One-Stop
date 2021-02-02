import React from "react";
import RegisterHeader from "../RegisterHeader";
import RegistrationForm from "../RegistrationForm";
import "../../App.css";

function Login() {
  return (
    <div className="App">
      <RegisterHeader />
      <div className="container d-flex align-items-center flex-column">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Login;
