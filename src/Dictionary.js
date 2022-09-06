/*react-dictionary-app*/
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <div className="col-9 input-form">
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}
