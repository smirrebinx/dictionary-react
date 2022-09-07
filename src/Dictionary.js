/*react-dictionary-app*/
import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  //Documentation: https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-9 input-form">
            <input
              type="search"
              autoFocus={true}
              className="form-control"
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
    </div>
  );
}
