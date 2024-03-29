import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getNote, deleteNote, archiveNote } from "../utils/api";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get note ID
    const getNoteId = async () => {
      const noteId = await getNote(id);
      setNote(noteId);
    };

    getNoteId();
  }, [id]);

  const handleDelete = async () => {
    await deleteNote(note.data.id);
    navigate("/");
    window.alert("Catatan berhasil dihapus!");
  };

  const handleArchive = async () => {
    await archiveNote(note.data.id);
    navigate("/");
    window.alert("Catatan berhasil diarsip!");
  };

  if (!note) {
    return <div>Catatan tidak ditemukan</div>;
  }
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.data.title}</h3>
      <p>{showFormattedDate(note.data.createdAt)}</p>
      <div className="detail-page__body">{note.data.body}</div>

      <div className="detail-page__action">
        <ArchiveButton
          id={note.data.id}
          onArchive={handleArchive}
          archived={note.data.archived}
        />
        <DeleteButton id={note.data.id} onDelete={handleDelete} />
      </div>
    </section>
  );
}

export default DetailPage;
