import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItemBody({ id, title, body, createdAt }) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <Link to={`/notes/${id}`}>
        <h3 className="note-item__title">{title}</h3>
      </Link>
      <p className="note-item__createdAt">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
};
export default NoteItemBody;
