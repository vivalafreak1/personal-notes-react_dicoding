import React from "react";

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      key="title"
      type="text"
      placeholder="Cari catatan...."
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
