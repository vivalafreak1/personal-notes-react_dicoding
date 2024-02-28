import React from "react";
import PropTypes from "prop-types";

import { LocaleConsumer } from "../contexts/LocaleContext";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      title: "",
      body: "",
      createdAt: "",
      archived: false,
      maxLength: 25,
    };

    // Binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, this.state.maxLength),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.setState(
      (prevState) => ({
        ...prevState,
        id: +new Date(),
        createdAt: new Date().toISOString(),
      }),
      () => {
        if (this.props.addNote) {
          this.props.addNote(this.state);
        }
      }
    );
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
              <p className="note-input__title__char-limit">
                {locale === "id" ? "Sisa karakter: " : "Character left: "}
                {this.state.maxLength - this.state.title.length}
              </p>
              <input
                className="note-input__title"
                type="text"
                placeholder={locale === "id" ? "Masukkan Judul" : "Add Title"}
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
              />
              <textarea
                className="note-input__body"
                type="text"
                placeholder={
                  locale === "id" ? "Masukkan Konten" : "Add Content"
                }
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
              />
              <button className="note-input__submit" type="submit">
                {locale === "id" ? "Buat" : "Create"}
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
