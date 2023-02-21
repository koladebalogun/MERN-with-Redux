import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="searchbar_wrapper">
      <input
        type="search"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />

      <button>
        <AiOutlineSearch className="icon" />
      </button>
    </div>
  );
};

export default SearchBar;
