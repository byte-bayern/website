import React from "react";
import Button from "../../shared/button";
import header from "../../../assets/img/components/header/Career.png";

export default function Header() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="header">
       <header className={`header content grid xs:py-standard md:pb-grid-standard`}>
          <div className={`col-12 lg:col-6 header- xs:p-grid-standard lg:pyr-grid-standard`}>
            <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 justify-end height-100 align-center">
              <div className="col-12">
                <h1 className={`headline-1 pb-20`}>Wäre es nicht toll...</h1>
                <h2 className={`pt-20 headline-2`}>... mit uns zusammen die digitale Zukunft Bayerns zu gestalten und dabei etwas echtes zu bewirken?</h2>
              </div>
              <div className="col-12">
                <div className="header-button">
                  <Button
                    text="Offene Stellen durchstöbern"
                    gridTemplateAreas={`'. icon text' 'vblue . .'`}
                    textBackgroundColor="yellow"
                    textColor="black"
                    iconColor="black"
                    link="https://byte-bayerische-agentur-fuer-digitales.jobs.personio.de/"
                    target={"_blank"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 lg:col-6 header-left`}>
            <img
              className={`header-image img-h-500 `}
              src={header}
              alt=""
            />
          </div>
        </header>
    </section>
  );
}
