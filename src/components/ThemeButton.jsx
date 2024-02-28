import React from "react";
import { ThemeConsumer } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeButton() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button
            className="theme-button"
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ThemeButton;
