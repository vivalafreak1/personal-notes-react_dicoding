import React from "react";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

function AddButton() {
  return (
    <Link to="/notes/new">
      <button className="action" type="button" title="Tambah">
        <IoIosAdd />
      </button>
    </Link>
  );
}

export default AddButton;
