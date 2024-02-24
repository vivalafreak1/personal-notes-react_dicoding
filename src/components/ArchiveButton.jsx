import React from "react";
import PropTypes from "prop-types";
import { IoArchiveSharp } from "react-icons/io5";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button
      className="action"
      onClick={() => onArchive(id)}
      type="button"
      title="Arsipkan"
    >
      {archived === false ? <IoArchiveSharp /> : <IoArchiveSharp />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
