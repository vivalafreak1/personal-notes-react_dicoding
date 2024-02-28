import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext";

import ThemeButton from "./ThemeButton";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <ThemeButton />
              </li>
              <li>
                <a className="navigation__archive" href="/notes/archive">
                  {locale === "id" ? "Arsip" : "Archive"}
                </a>
              </li>
              <li>
                <button className="navigation__lang" onClick={toggleLocale}>
                  {locale === "id" ? "English" : "Indonesia"}
                </button>
              </li>
              <li>
                <button className="navigation__logout" onClick={logout}>
                  {name} <FiLogOut />
                </button>
              </li>
            </ul>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
