import React from "react";
import bookPile from "./images/bookPile.jpg";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <div className="card">
        <div className="card-thumb">
          <img
            src={bookPile}
            className="img-fluid d-block card-img"
            alt="Words in a pile"
          />
          <h3 className="word-class">{props.meaning.partOfSpeech}</h3>
        </div>
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <p>{definition.definition}</p>
              <br />
              <p>
                <em>{definition.example}</em>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
