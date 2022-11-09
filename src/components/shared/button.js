import React from "react";
import { Right } from "../../assets/img/icons";

export default function Button(props) {
  const gridTemplateAreas = props.gridTemplateAreas;
  let elements = gridTemplateAreas.replace(/[^\w\s]/gi, "");
  elements = elements.match(/("[^"]+"|[^"\s]+)/g);

  let grid = [];
  let buttonClassName = props.text ? "button withText" : "button noText";

  for (let i = 0; i < 6; i++) {
    let gridElement = "empty";
    let content = "";

    if (i < elements?.length) {
      gridElement = elements[i];

      if (gridElement === "text") {
        gridElement = `text ${props.textBackgroundColor}`;
        content = (
          <p key={`pixel--${i} 1231243`} className={`text fs-button`}>
            {props.text}
          </p>
        );
      }
      
      if (gridElement === "icon") {
        content = props.icon ? (
          props.icon
        ) : (
            <Right className={`icon ${props.iconColor}`} />
        );
      }
    }

    let item = (
      <div key={i} className={`item button-pixel ${gridElement}`}>
        {content}
      </div>
    );

    grid.push(item);
  }

  return (

    <a href={props.link} target={props.target} style={{width:"100%"}} alt={props.altText}>
    <div
      title={props.text}
      className={buttonClassName}
      style={{
        ["--text-background-color"]: props.textBackgroundColor,
        ["--grid-template-areas"]: props.gridTemplateAreas,
        ["--text-color"]: props.textColor,
      }}
    >
      {grid}
    </div>
    </a>
  );
}
