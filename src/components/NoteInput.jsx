import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      title: "",
      body: "",
      createdAt: "",
      archived: false,
      maxLength: 50,
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
        body: event.garget.value,
      };
    });
  }
}
