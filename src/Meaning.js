import React from "react";
import Synonyms from "./Synonyms";

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
              <p>{definition.definition}</p>
              <br />
              <p>
                <em>{definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
