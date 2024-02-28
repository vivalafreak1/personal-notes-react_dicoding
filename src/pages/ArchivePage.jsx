import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/api";

import { LocaleConsumer } from "../contexts/LocaleContext";

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

function ArchivePage({ defaultKeyword, keywordChange }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      const { data } = await getArchivedNotes();
      setNotes(data || []);
      setTimeout(() => {
        setLoading(false);
      }, 400); // Menetapkan loading menjadi false setelah sekitar 1 detik
    }
    fetchNotes();
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    setLoading(true);
    const { data } = await getArchivedNotes();
    setNotes(data || []);

    setLoading(false);
  };

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    keywordChange(keyword);
  };

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    setLoading(true);
    const { data } = await getArchivedNotes();
    setNotes(data || []);

    setLoading(false);
  };

  const filteredNotes = notes
    .map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
    }))
    .filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <div>
              <h2>
                {locale === "id" ? "Daftar Arsip Catatan" : "Archive Notes"}
              </h2>
              <SearchBar
                keyword={keyword}
                keywordChange={onKeywordChangeHandler}
              />
            </div>
            {loading ? (
              <>
                <h1>Loading</h1>
                <p>Loading</p>
                <p>Loading</p>
              </>
            ) : (
              <NoteList
                notes={filteredNotes}
                onDelete={onDeleteHandler}
                onArchive={onUnarchiveHandler}
              />
            )}
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
export default ArchivedPageWrapper;
