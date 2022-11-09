import React from "react";
import hero from "../../../assets/img/components/hero/home.png";

export default function Hero() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="blueHero">
        <div className="content py-standard">
            <div className="blue-hero">
                <img className="blue-hero-image" src={hero} alt=""></img>
            </div>
        </div>
    </section>
  )
}