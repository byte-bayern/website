import React from "react";

export default function HorizontalText(props) {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" className="horizontal-tile">
      <div className="horizontal-tile--divider--bottom">
        <p className="body-1 pt-30 pb-30">{props.text}</p>
      </div>
    </section>
  );
}
