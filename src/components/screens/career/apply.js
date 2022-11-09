import React from "react";
import Button from "../../shared/button";
import header from "../../../assets/img/components/apply/Apply.jpg";

export default function Apply() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="header">
       <div className={`header content grid p-grid-standard xs:py-standard md:pb-grid-standard`}>
          <div className={`col-12 lg:col-6 header- xs:p-grid-standard lg:pyr-grid-standard`}>
            <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 justify-end height-100 align-center">
              <div className="col-12">
                <p className={`headline-2 pb-20`}>Wir klingen nach einen idealen Match? Dann bewirb dich bei uns!</p>
                <p className={`pt-20`}>
                    Wir freuen wir uns über deine vollständigen Bewerbungsunterlagen (Anschreiben, Lebenslauf, frühestmögliches Startdatum sowie Gehaltsvorstellung) im PDF-Format.
                    <br /><br />
                    Sollte einmal keine passende Position dabei sein, freuen wir uns ebenfalls über deine Initiativbewerbung mit einem Hinweis darauf, für welche:n Bereich:e du dich interessierst.
                </p>
              </div>
              <div className="col-12">
                <div className="header-button">
                  <Button
                    text="Offene Stellen durchstöbern"
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
          <div className={`col-12 lg:col-6 header-left`}>
            <img
              className={`header-image img-h-500 `}
              src={header}
              alt=""
            />
          </div>
        </div>
    </section>
  );
}
