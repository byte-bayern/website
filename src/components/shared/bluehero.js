import React from "react";
import SplitText from "./splitText";

export default function BlueHero(props) {
  const { image, alt, lineStyle, line } = props;

  return (
    <div className="content py-standard">
      <div className="blue-hero">
        <img className="blue-hero-image" src={image} alt={alt}></img>
        <div className={`blue-hero-text tc-white ${lineStyle}`}>
          <SplitText title={line} />
        </div>
      </div>
    </div>
  );
}
