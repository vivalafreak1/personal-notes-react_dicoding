import React from "react";
import { Link } from "react-router-dom";
import { IoArchiveSharp } from "react-icons/io5";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">Arsip</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
