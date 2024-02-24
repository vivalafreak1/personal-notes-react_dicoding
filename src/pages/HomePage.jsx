import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

import { deleteNote, getActiveNotes, archiveNote } from "../utils/local-data";
import AddButton from "../components/AddButton";

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

class HomePage extends React.Component {
  static propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const isConfirmed = window.confirm(
      "Apakah yakin untuk menghapus notes ini?"
    );

    if (isConfirmed) {
      deleteNote(id);

      // update the note state from data.js
      this.setState(() => {
        return {
          notes: getActiveNotes(),
        };
      });
    }
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  render() {
    const notes = this.state.notes
      .map((note) => ({
        ...note,
        createdAt: new Date(note.createdAt),
      }))
      .filter((event) => {
        return event.title
          .toLowerCase()
          .includes(this.state.keyword.toLowerCase());
      });

    return (
      <section className="homepage">
        <h2>Daftar Catatan</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList
          notes={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <div className="homepage__action">
          <AddButton />
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
