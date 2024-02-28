import React from "react";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

import { LocaleConsumer } from "../contexts/LocaleContext";

function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
    window.alert("Catatan berhasil ditambah!");
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="add-new-page">
            <h2>{locale === "id" ? "Tambah catatan" : "Add note"}</h2>
            <NoteInput addNote={onAddNoteHandler} />
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default AddPage;
