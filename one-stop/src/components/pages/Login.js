import React from "react";
import RegisterHeader from "../RegisterHeader";
import RegistrationForm from "../RegistrationForm";
import "../../App.css";

function Login() {
  return (
    <>
      <RegisterHeader />

      <div>
        <RegistrationForm />
      </div>
    </>
  );
}

export default Login;

// function Login() {
//   return (
//     <div className="login">
//       <RegisterHeader />
//       <div>
//         <RegistrationForm />
//       </div>
//     </div>
//   );
// }

// export default Login;
