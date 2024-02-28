import React, { useState } from "react";
import PropTypes from "prop-types";

import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginInput({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form onSubmit={onSubmitHandler} className="login-input">
            <input
              className="login-input__email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onEmailChangeHandler}
            />
            <input
              className="login-input__password"
              type="password"
              placeholder={locale === "id" ? "Kata sandi" : "Password"}
              value={password}
              onChange={onPasswordChangeHandler}
            />
            <button className="login-input__button" type="submit">
              {locale === "id" ? "Masuk" : "Sign in"}
            </button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
