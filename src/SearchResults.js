import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div>
        <section>
          <h2 className="searched-word">{props.results.word}</h2>
          {props.results.phonetics
            .filter((phonetic) => phonetic.audio !== "")
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
