import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <div className="row">
        <div className="col-2">
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen
          </a>
        </div>
        <div className="col-2">
          <span className="phonetic-text">{props.phonetic.text}</span>
        </div>
      </div>
    </div>
  );
}
