import React from "react";
import Button from "../../shared/button";
import header from "../../../assets/img/components/header/Team.png";

export default function Header() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="header">
       <header className={`header content grid xs:py-standard md:pb-grid-standard`}>
          <div className={`col-12 lg:col-6 header- xs:p-grid-standard lg:pyr-grid-standard`}>
            <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 justify-end height-100 align-center">
              <div className="col-12">
                <p className={`headline-1 pb-20`}>Wir sind byte.</p>
                <p className={`pt-20 headline-2`}>Als Digitalisierungs­partner der bayerischen Ministerien und staatlichen Behörden unterstützen und beraten wir die staatliche Verwaltung bei der Entwicklung und Umsetzung digitaler Produkte und Services.</p>
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
