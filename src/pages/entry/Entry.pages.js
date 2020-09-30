import React from "react";
import "./Entry.style.css";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";

export const Entry = () => {
  return (
    <div className="entry-page bg-secondary">
      <Jumbotron className="form-box">
        <LoginForm />
      </Jumbotron>
    </div>
  );
};
