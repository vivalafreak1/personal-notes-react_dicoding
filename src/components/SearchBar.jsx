import React from "react";
import PropTypes from "prop-types";

import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="search-bar">
            <input
              key="title"
              type="text"
              placeholder={
                locale === "id" ? "Cari catatan......" : "Search Notes......"
              }
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
            />
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
