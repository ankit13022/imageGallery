import React, { useState } from "react";
import "./search.css";
const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="search">
      <form onSubmit={onSubmit} className="submit">
        <input
          onChange={(e) => setText(e.target.value)}
          className="input"
          type="text"
          placeholder="Search Image Term..."
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
