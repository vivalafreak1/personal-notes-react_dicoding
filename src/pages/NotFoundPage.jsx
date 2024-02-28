import React from "react";
import { Link } from "react-router-dom";

import { LocaleConsumer } from "../contexts/LocaleContext";

function NotFoundPage() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="not-found">
            <h1>{locale === "id" ? "Kode eror: 404" : "Error Code: 404"}</h1>
            <p>
              {locale === "id"
                ? "Halaman yang anda cari tidak ditemukan"
                : "Page not found"}
            </p>
            <p>
              {locale === "id" ? "Kembali ke " : "Back to "}
              <Link to="/">{locale === "id" ? "Beranda" : "Home"}</Link>.
            </p>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default NotFoundPage;
