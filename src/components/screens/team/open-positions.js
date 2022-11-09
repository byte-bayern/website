import React from "react";
import Button from "../../shared/button";
import header from "../../../assets/img/components/takepart/home.png";

export default function OpenPositions() {
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
                <p className={`headline-1 pb-20`}>Verwaltung gemeinsam neu denken und mitgestalten.</p>
              </div>
              <div className="col-12">
                <div className="header-button">
                  <Button
                    text="Offene Stellen bei byte"
                    gridTemplateAreas={`'. icon text' 'vred . .'`}
                    textBackgroundColor="black"
                    textColor="white"
                    iconColor="blue"
                    link="https://byte-bayerische-agentur-fuer-digitales.jobs.personio.de/"
                    target={"_blank"}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
    </section>
  );
}
