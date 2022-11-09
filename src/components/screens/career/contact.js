import React from "react";
import SharedHeader from "../../shared/header";
import teaser from "../../../assets/img/components/teaser/teaser.webp";

export default function Contact() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="teaser">
      <SharedHeader
        image={teaser}
        classNameImage="wallpaper-image"
        extraClassName="teaser py-0"
        align="left"
        titlesize="headline-1"
        titlecolor="black"
        title="Du hast weitere Fragen?"
        text="Melde Dich gerne per E-Mail bei unserem People & Culture Team unter Karriere@byte.bayern"
        textsize="body-1 pt-50"
        buttontext="Mail an byte Karriere senden"
        buttonGridTemplateAreas={`'. icon text' 'vyellow . .'`}
        buttonTextBackgroundColor="white"
        buttonTextColor="black"
        buttonIconColor="black"
        link="mailto:Karriere@byte.bayern"
      />
    </section>
  );
}
