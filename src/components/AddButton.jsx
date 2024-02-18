import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

function AddButton() {
  return (
    <button className="action" type="button" title="Tambah">
      <Link to="/notes/new">
        <IoMdAdd />
      </Link>
    </button>
  );
}

export default AddButton;
