import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onRegisterHandler(user) {
    setLoading(true);
    setError("");

    const { error } = await register(user);
    if (error) {
      setError(error);
    } else {
      navigate("/");
    }

    setLoading(false);
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="register-page">
            <h2>
              {locale === "id" ? "Daftar akun baru" : "Register your account"}
            </h2>
            {error && <p>{error}</p>}
            <RegisterInput register={onRegisterHandler} />
            {loading && <p>Loading...</p>}
            <p>
              {locale === "id" ? "Kembali ke " : "Back To "}
              <Link to="/">{locale === "id" ? "Masuk" : "Login"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
