import React from "react";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="action"
      onClick={() => onDelete(id)}
      type="button"
      title="Hapus"
    >
      <MdDeleteForever />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
