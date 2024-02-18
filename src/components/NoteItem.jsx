import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <article className="note-item">
      <NoteItemBody
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
