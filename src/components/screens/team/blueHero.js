import React from "react";
import hero from "../../../assets/img/components/hero/blueTeam.png";

export default function BlueHero() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="blueHero">
      <div className="content py-standard">
        <div className="blue-hero">
          <img className="blue-hero-image" src={hero} alt=""></img>
          <div className={`blue-hero-text tc-white blue-hero-text-left headline-2 p-standard`}>
            Wir glauben, dass die Digitalisierung nur dann funktionieren kann, wenn sie gemeinsam und von innen heraus gestaltet wird.
          </div>
        </div>
      </div>
    </section>
  );
}