import React, { useState } from "react";
import "./Entry.style.css";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/Password Reset/ResetPassword";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //creating a useState to load reset password form in different page to load the loginform first
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    // console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    // prevent default helps to stop the data(eg email ) disapper when page is refreshed.
    e.preventDefault();

    if (!email) {
      return alert(
        "Please fill email propely and password should be of minimum 8 characters"
      );
    }
    // To call API to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    // prevent default helps to stop the data(eg email ) disapper when page is refreshed.
    e.preventDefault();

    if (!email) {
      return alert("Please fill email propely");
    }
    // To call API to submit the form
    console.log(email);
  };

  const formSwitch = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-secondary">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitch={formSwitch}
            email={email}
            pass={password}
          />
        )}

        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitch={formSwitch}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};
