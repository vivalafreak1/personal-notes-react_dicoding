import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>Error Code: 404</h1>
      <p>Halaman yang anda cari tidak ditemukan</p>
      <p>
        Kembali ke <Link to="/">beranda</Link>.
      </p>
    </div>
  );
}

export default NotFoundPage;
