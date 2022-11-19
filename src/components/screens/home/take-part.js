import React from "react";
import Button from "../../shared/button";
import header from "../../../assets/img/components/takepart/home.png";

export default function TakePart() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="header">
       <header className={`header content grid xs:py-standard md:pb-grid-standard`}>
          <div className={`col-12 lg:col-6 header- xs:p-grid-standard lg:pyr-grid-standard`}>
            <img
                className={`header-image img-h-500 `}
                src={header}
                alt=""
              />
          </div>
          <div className={`col-12 lg:col-6 header-left`}>
            <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 justify-end height-100 align-center">
              <div className="col-12">
                <h2 className={`headline-1 pb-20`}>Mach mit! Und denke und gestalte Verwaltung neu mit uns!</h2>
              </div>
              <div className="col-12">
                <div className="header-button">
                  <Button
                    text="Karriere bei byte"
                    gridTemplateAreas={`'vred . .' '. icon text'`}
                    textBackgroundColor="black"
                    textColor="white"
                    iconColor="blue"
                    link="/career"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
    </section>
  );
}
