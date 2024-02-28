import React, { useState } from "react";
import PropTypes from "prop-types";

import { LocaleConsumer } from "../contexts/LocaleContext";

const RegisterInput = ({ register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Invalid");
      return;
    }

    register({
      name,
      email,
      password,
    });
  };

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form onSubmit={onSubmitHandler} className="register-input">
            <input
              className="register-input__name"
              type="text"
              placeholder={locale === "id" ? "Nama" : "Name"}
              value={name}
              onChange={onNameChange}
            />
            <input
              className="register-input__email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
            />
            <input
              className="register-input__password"
              type="password"
              placeholder={locale === "id" ? "Kata sandi" : "Password"}
              autoComplete="current-password"
              value={password}
              onChange={onPasswordChange}
            />
            <input
              className="register-input__confirm-password"
              type="password"
              placeholder={
                locale === "id" ? "Konfirmasi kata sandi" : "Confirm Password"
              }
              autoComplete="current-password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
            />
            <button className="register-input__button" type="submit">
              {locale === "id" ? "Daftar" : "Register"}
            </button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
