import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
