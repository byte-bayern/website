import React from "react";
import { PixelsIntro } from "../../../assets/img/icons";
import ColumnText from "../../shared/columnText";
import Button from "../../shared/button";

export default function Digitalschmiede() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" data-aos="fade-up" data-aos-duration="3000"  id="introduction" >
      <div className="grid p-grid-standard xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 content">
        <div className="col-12 headline-1 tc-blue">Die Digitalschmiede Bayern</div>
        <div className="grid content">
        <div className="col-12 lg:col-6 body-1">
          Mit unserem Programm Digitalschmiede Bayern befähigen wir interdisziplinäre Teams, <strong>nutzerzentrierte digitale Lösungen</strong> für konkrete Herausforderungen der <strong>bayerischen Verwaltung</strong> zu erarbeiten. Unser Ziel ist es, mit dem 3-monatigen Programm einerseits den digitalen Nachwuchs für den staatlichen Sektor zu begeistern und gleichzeitig den Ministerien neue Impulse für die Anwendung neuer Methoden zu geben.<br />
          <img
            className="md:hidden sm:hidden xs:hidden pt-50"
            src={PixelsIntro}
            alt="pixels"
          ></img>
        </div>
        <div className={`col-12 lg:col-6 body-1`}>
          <div className="grid p-grid-standard grid-gap-0 ">
                <div className="col-12">
                  <div className="header-button">
                    <Button
                      text="Zur Website"
                      gridTemplateAreas={`'. vblack text' 'vblue . .'`}
                      textBackgroundColor="yellow"
                      textColor="black"
                      iconColor="yellow"
                      link="https://digitalschmiede.bayern"
                      target={"_blank"}
                    />
                  </div>
                </div>
              </div>
        </div>
      </div>
      </div>
    </section>
  );
}
