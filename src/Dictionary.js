/*react-dictionary-app*/
import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  //Documentation: https://dictionaryapi.dev/
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000117b7f79167cf469bb3ba291b1fdb17d5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9 input-form mb-2">
                  <input
                    type="search"
                    autoFocus={true}
                    className="form-control"
                    placeholder="Search for a word"
                    onChange={handleKeywordChange}
                    defaultValue={props.defaultKeyword}
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
            <div>
              <p className="suggested-words">
                <em>Suggested words: wine, food, animal</em>
              </p>
            </div>
          </section>
          <SearchResults results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
