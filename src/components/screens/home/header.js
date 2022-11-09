import React from "react";
import Button from "../../shared/button";
import header from "../../../assets/img/components/header/Home.png";

export default function Header() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="header">
       <header className={`header content grid xs:py-standard md:pb-grid-standard`}>
          <div className={`col-12 lg:col-6 header- xs:p-grid-standard lg:pyr-grid-standard`}>
            <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 justify-end height-100 align-center">
              <div className="col-12">
                <p className={`headline-1 pb-20`}>Wir gestalten die digitale Zukunft Bayerns.</p>
                <p className={`pt-10 headline-2`}>Die byte - Bayerische Agentur für Digitales - stößt Digitalprojekte an und begleitet die bayerische Verwaltung bei der Umsetzung nutzerzentrierterter Lösungen.</p>
              </div>
              <div className="col-12">
                <div className="header-button">
                  <Button
                    text="Erfahre mehr über uns"
                    gridTemplateAreas={`'vred . .' '. icon text'`}
                    textBackgroundColor="black"
                    textColor="white"
                    iconColor="blue"
                    link="/team"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 lg:col-6 header-left`}>
            <img
              className={`header-image img-h-400 `}
              src={header}
              alt=""
            />
          </div>
        </header>
    </section>
  );
}
