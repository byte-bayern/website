import React from "react";
import hero from "../../../assets/img/components/hero/team.png";

export default function Hero() {
  return (
    <section>
         <div className="content py-standard">
            <img className="blue-hero-image" src={hero} alt="" ></img>
         </div>
    </section>
  )
}