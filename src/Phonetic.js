import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <div className="row">
        <div className="col-2">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className="col-2">
          <span className="phonetic-text">{props.phonetic.text}</span>
        </div>
      </div>
    </div>
  );
}
