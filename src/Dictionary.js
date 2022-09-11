/*react-dictionary-app*/
import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  //Documentation: https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-9 input-form mb-4">
            <input
              type="search"
              autoFocus={true}
              className="form-control"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-outline-secondary shadow-sm search-button"
            />
          </div>
        </div>
      </form>
      <SearchResults results={results} />
    </div>
  );
}
