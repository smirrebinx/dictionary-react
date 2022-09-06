import React from "react";
import Footer from "./Footer";
import Dictionary from "./Dictionary";

export default function DictionaryApp() {
  return (
    <div className="container">
      <div className="dictionary-container">
        <div>
          <Dictionary />
          <div className="col text-center"></div>
        </div>
      </div>
      <div className="col"></div>
      <Footer />
    </div>
  );
}
