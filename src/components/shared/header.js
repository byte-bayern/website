import React from "react";
import Button from "./button";

export default function SharedHeader(props) {
  const {
    align,
    image,
    imageAltText,
    title,
    titlesize,
    text,
    textsize,
    buttontext,
    buttonGridTemplateAreas,
    buttonTextColor,
    buttonTextBackgroundColor,
    buttonIconColor,
    link,
    target,
    classNameImage,
    extraClassName,
    titlecolor,
    projectLogo,
    ministryLogo
  } = props;
  const contrastAlign = align === "left" ? "right" : "left";
  const paddingMain =
    align === "left" ? "lg:pyr-grid-standard" : "lg:pyl-grid-standard";

  const paddingLarge =
    align === "left"
      ? "xs:py-standard md:pb-grid-standard"
      : "xs:py-standard md:pb-grid-standard";

  return (
    <header
      className={`header ${extraClassName ? extraClassName : null
        } content grid ${paddingLarge}`}
    >
      <div className={`col-12 lg:col-6 header-${align} `}>
        <img
          className={`${classNameImage} img-h-500 `}
          src={image}
          alt={imageAltText}
        />
      </div>
      <div
        className={`col-12 lg:col-6 header-${contrastAlign} xs:p-grid-standard ${paddingMain}`}
      >
        <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 justify-end height-100 align-center">
          <div className="col-12">
            <p className={`tc-${titlecolor} ${titlesize}`}>{title}</p>
            <p className={`pt-10 ${textsize}`}>{text}</p>
          </div>

          {buttontext ? (
            <div className="col-12">
              <div className="header-button">
                <Button
                  text={buttontext}
                  gridTemplateAreas={buttonGridTemplateAreas}
                  textBackgroundColor={buttonTextBackgroundColor}
                  textColor={buttonTextColor}
                  iconColor={buttonIconColor}
                  link={link}
                  target={target}
                />
              </div>
            </div>
          ) : null}


          {projectLogo && ministryLogo ? (
            <div className="grid pt-standard">
              <div className="col-12 pb-0">
                <p>
                  Zusammenarbeit von</p>
              </div>
              <div className="md:col-5 xs:col-12">
                <img
                  className="img-w-150"
                  src={projectLogo}
                  alt="logo"
                /></div>
              <div className="md:col-7 xs:col-12">
                <img
                  className="img-h-40"
                  src={ministryLogo}
                  alt="logo"
                />
              </div></div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
