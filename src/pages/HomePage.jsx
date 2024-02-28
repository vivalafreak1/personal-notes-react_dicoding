import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

import { deleteNote, getActiveNotes, archiveNote } from "../utils/api";
import AddButton from "../components/AddButton";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

function HomePage({ defaultKeyword, keywordChange }) {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const { data } = await getActiveNotes();
      setNotes(data || []);
      setLoading(false);
    }
    fetchNotes();
  }, []);

  async function onDeleteHandler(id) {
    const isConfirmed = window.confirm(
      "Apakah yakin untuk menghapus notes ini?"
    );
    setLoading(true);
    try {
      if (isConfirmed) {
        await deleteNote(id);
        const { data } = await getActiveNotes();
        setNotes(data || []);
        // update the note state from data.js
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    keywordChange(keyword);
  }

  async function onArchiveHandler(id) {
    setLoading(true);
    await archiveNote(id);
    const { data } = await getActiveNotes();
    setNotes(data || []);
    setLoading(false);
  }

  const filteredNotes = notes
    .map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
    }))
    .filter((event) => {
      return event.title.toLowerCase().includes(keyword.toLowerCase());
    });

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="homepage">
            <h2>{locale === "id" ? "Daftar catatan" : "List notes"}</h2>
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />

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
                onArchive={onArchiveHandler}
              />
            )}
            <div className="homepage__action">
              <AddButton />
            </div>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
