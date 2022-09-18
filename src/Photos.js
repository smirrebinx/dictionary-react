import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img
                  src={photo.src.landscape}
                  className="img-fluid mb-4 searched-word-images"
                  alt={photo.src.photographer}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
