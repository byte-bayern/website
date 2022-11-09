import React from "react";
import Button from "./button";
import SplitText from "./splitText";

export default function LocalHeader(props) {
  const {
    title,
    titlesize,
    buttontext,
    buttonGridTemplateAreas,
    buttonTextColor,
    buttonTextBackgroundColor,
    buttonIconColor,
    buttonInfoText,
  } = props;

  return (
    <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 local-header pxt-grid-standard content ic-40 xl:ic-80">
      {buttonInfoText ? (
        <div className="local-header--button col-12 lg:col-5 pt-20 grid">
          <div className="local-header--button---info">
            <p className="tc-black fs-button m-a">{buttonInfoText}</p>
          </div>
          {buttonGridTemplateAreas ? (
            <Button
              text={buttontext}
              gridTemplateAreas={buttonGridTemplateAreas}
              textBackgroundColor={buttonTextBackgroundColor}
              textColor={buttonTextColor}
              iconColor={buttonIconColor}
              link={props.link}
            />
          ) : null}
        </div>
      ) : null}
      <div className={`local-header--text col-12 lg:col-7`}>
        <div className={`tc-blue tt-uppercase fw-bolder m-0 ${titlesize}`}>
          <SplitText title={title} />
        </div>
      </div>
    </div>
  );
}
