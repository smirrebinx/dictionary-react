import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <div>
        <div>
          <h3 className="word-class">{props.meaning.partOfSpeech}</h3>
        </div>
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <p className="definition">{definition.definition}</p>
              <p className="example">{definition.example}</p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
