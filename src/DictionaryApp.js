import React from "react";
import Footer from "./Footer";
import Dictionary from "./Dictionary";
import book from "./images/book.png";

export default function DictionaryApp() {
  return (
    <div className="container">
      <div className="dictionary-container">
        <header>
          <h1>Dictionary</h1>
          <div className="col-md-12 align-items-center">
            <img
              className="img-fluid d-block header-img"
              src={book}
              alt="An illustration of a book and a person"
            />
          </div>
        </header>
        <div>
          <Dictionary defaultKeyword="chocolate" />
          <div className="col text-center"></div>
        </div>
      </div>
      <div className="col"></div>
      <Footer />
    </div>
  );
}
