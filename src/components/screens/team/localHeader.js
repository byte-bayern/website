import React from "react";
import LocalHeader from "../../shared/localHeader";

export default function LocalHeaderTeam() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="localHeaderAbout">
      <LocalHeader
        titlesize="display-1"
        title={"Das\n byte\n team"}
        buttontext="Zu byte Karriere"
        buttonGridTemplateAreas={`'. icon text' 'vyellow . .'`}
        buttonTextBackgroundColor="black"
        buttonTextColor="white"
        buttonIconColor="blue"
        buttonInfoText="Werde Teil von unserem Team"
        link="/career"
      />
    </section>
  );
}
