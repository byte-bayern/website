import React from "react";
import header from "../../../assets/img/components/byte/byte.png";

export default function Byte() {
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
                <h2 className={`tc-blue display-2`}>Wir sind die Bayerische Agentur für Digitales</h2>
              </div>
            </div>
          </div>
        </header>
    </section>
  );
}
