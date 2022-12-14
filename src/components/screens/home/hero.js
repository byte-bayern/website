import React from "react";
import SplitText from "../../shared/splitText";
import hero from "../../../assets/img/components/hero/home.png";
import Button from "../../shared/button";

export default function Hero() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="blueHero">
      <div className="content py-standard">
        <div className="blue-hero">
          <img className="blue-hero-image" src={hero} alt=""></img>
          <div className={`blue-hero-text tc-white blue-hero-text-left display-1 tt-uppercase pl-20 pt-20`}>
            <SplitText title={"Lerne\n unser Team\n kennen"} />
            
              <div className="col-12 pt-50">
                <div className="header-button">
                  <Button
                    text="Zum Team"
                    gridTemplateAreas={`'. icon text' 'vblue . .'`}
                    textBackgroundColor="white"
                    textColor="black"
                    iconColor="black"
                    link="/team"
                  />
                </div>
              </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}