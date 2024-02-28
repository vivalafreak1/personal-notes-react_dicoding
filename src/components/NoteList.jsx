import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

import { LocaleConsumer } from "../contexts/LocaleContext";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="notes-list">
            {notes.length > 0 ? (
              notes.map((note) => (
                <NoteItem
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note}
                />
              ))
            ) : (
              <p>{locale === "id" ? "Tidak ada catatan." : "Empty notes."}</p>
            )}
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;
