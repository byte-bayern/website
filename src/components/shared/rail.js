import React from "react";

export default function Rail(props) {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" className="body-1">
      <div className="count">
        <ol>
          {props.list.map((line, index) => (
            <li key={index} className="item">{line}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
