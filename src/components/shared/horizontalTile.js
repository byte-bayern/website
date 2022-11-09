import React from "react";
import Button from "./button";

export default function HorizontalTile(props) {
  return (
    <div className="horizontal-tile">
      <div className={`grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100`}>
        {props.image ? <img className="image col-12 lg:col-4" src={props.image} alt="kontakt"></img> : null}
        <div className={`col-12 pb-0 ${props.align} ${props.image ? "lg:col-4" : " lg:col-8 "}`}>
          <div className="headline-1" lang={props.lang}>{props.title}</div>
          <p className="body-1 pt-30 fw-normal">{props.excerpt}</p>
        </div>

        {props.buttonGridTemplateAreas ? (
          <div
            className="horizontal-tile--button col-12 justify-end lg:col-4"
          >
            <Button
              gridTemplateAreas={props.buttonGridTemplateAreas}
              iconColor="black"
              link={props.link}
              target={props.target}
              altText={props.altText}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
