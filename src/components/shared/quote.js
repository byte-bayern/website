import React from "react";

export default function Quote(props) {
  return (
    <div className={`grid content quote ${props.side}`}>
      <div className="col-12 lg:col-6 body-1">
        <div className="grid grid-gap-0 quote-text" data-aos-duration="3000"   data-aos="fade-up" >
          <div className="quote-text-top pxt-standard lg:p-standard">{props.who}</div>
          <blockquote className="quote-text-bottom p-standard">{props.quote}</blockquote>
        </div>
      </div>
      <img
        className="col-12 lg:col-6 quote-image img-h-500"
        src={props.image}
        alt={props.imageAltText}
      />
    </div>
  );
}
