import React from "react";
import IconPerson from "../../../assets/img/icons/icon-person.svg";
import IconPrototype from "../../../assets/img/icons/icon-agile.svg";
import IconCode from "../../../assets/img/icons/icon-network.svg";

let successes = [
  {
    icon: IconPerson,
    alt: "person",
    align: "left",
    excerpt:
      "stoßen Digitalprojekte im öffentlichen Sektor von innen heraus an.",
  },
  {
    icon: IconPrototype,
    alt: "prototyp",
    align: "left",
    excerpt:
      "arbeiten Hand in Hand mit denjenigen, die die Digitalisierung betrifft.",
  },
  {
    icon: IconCode,
    alt: "code",
    align: "left",
    excerpt: "bringen frischen Wind und Hands-On-Mentalität in die Verwaltung.",
  },
];
export default function What() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="success">
      <div className="grid p-grid-standard xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 content">
        <div className="col-12 display-2 tc-blue">Was wir machen</div>
        <div className="col-12 lg:col-6">
          {successes.map((success, index) => (
            <div key={index} className="grid grid-gap-0">
              <div className="col-12 lg:col-3 xs:pt-30 xs:pb-0 lg:pb-30 lg:pt-0">
                <img width="80" height="80" src={success.icon} alt={success.alt} />
              </div>
              <div className="col-12 lg:col-9">
                <p className="body-1 fw-normal"><strong>WIR</strong> {success.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 lg:col-6 body-1">
          Als <strong>digitale Beratungs- und Unterstützungseinheit der Staatsregierung</strong> haben wir den Anspruch, moderne Methoden der Digitalwirtschaft und Start-Up-Welt in den staatlichen Bereich zu übertragen sowie dauerhaft eigene digitale Expertise für den Staat aufzubauen.
        </div>
      </div>
    </section>
  );
}
