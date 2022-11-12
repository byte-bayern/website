import React from "react";
import ColumnText from "../../shared/columnText";
import Button from "../../shared/button";
import GetToKnowImg from "../../../assets/img/components/career/get-to-know.png"

export default function GetToKnow() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000">
        <ColumnText
            nrColumns="2"
            textLeftStyle="display-2 tc-blue"
            textLeft="Lerne das Team kennen"
            textRight={
                <p>
                    Wir alle stecken unser Herzblut in die Entwicklung neuer digitaler Produkte und Services.
                </p>
            }
        />
        <div className="content py-standard">
            <img src={GetToKnowImg} alt="" className="imgCareer"/>
            <div className="grid col-6">
            <Button
                    text="Mehr zum Team"
                    gridTemplateAreas={`'. icon text' 'vblue . .'`}
                    textBackgroundColor="yellow"
                    textColor="black"
                    iconColor="black"
                    link="/team"
                  />
            </div>

        </div>
    </section>
  )
}