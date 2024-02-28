import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

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
    <section className="register-page">
      <h2>Daftar akun baru</h2>
      {error && <p>{error}</p>}
      <RegisterInput register={onRegisterHandler} />
      {loading && <p>Loading...</p>}
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
