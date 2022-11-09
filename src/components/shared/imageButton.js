import React from "react";
import Button from "./button";

// Component that represents image with the right-arrow button on the right bottom corner

export default function ImageButton(props) {
  return (
    <div className="imageButton">
      <img className="image" src={props.image} alt="kontakt"></img>
      {props.link ? (
      <div className="arrow">
        <Button
          text={props.buttontext}
          gridTemplateAreas={props.buttonGridTemplateAreas}
          textBackgroundColor={props.buttonTextBackgroundColor}
          textColor={props.buttonTextColor}
          iconColor={props.buttonIconColor}
          link={props.link}
          target={props.target}
        />
      </div>
      ) : null }
    </div>
  );
}
