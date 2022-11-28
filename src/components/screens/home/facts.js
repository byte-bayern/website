import React from "react";
import Button from "../../shared/button";
import VerticalTile from "../../shared/verticalTile";
import {
  Agile,
  Network,
  User
} from "../../../assets/img/icons";

let facts = [
  {
    title: "Was wir machen",
    component: Network,
    alt: "",
    content:
      "Als Bayerische Agentur für Digitales gestalten wir gemeinsam mit der öffentlichen Verwaltung digitale Lösungen und Produkte, die auf die Bedürfnisse der Nutzer:innen eingehen.",
  },
  {
    title: "Unsere Mission",
    component: Agile,
    alt: "",
    content:
      "Wir gestalten die digitale Transformation der öffentlichen Verwaltung des Freistaates Bayern aktiv und menschzentriert.",
  },
  {
    title: "Unser Team",
    component: User,
    alt: "",
    content:
      "Wir sind ein motiviertes und interdisziplinäres Team, das daran glaubt, echten Impact nur gemeinsam schaffen zu können.",
  }
];

export default function Facts() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="facts">
      <div className="grid p-grid-standard grid-gap-0 content">
        {facts.map((fact, index) => (
          <div className="col-12 md:col-6" key={index}>
            <VerticalTile
              component={<img width="80" height="80" src={fact.component} alt={fact.alt} />}
              title={fact.title}
              excerpt={{
                content: fact.content,
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid p-grid-standard grid-gap-0 ">
        <div className="col-12">
          <div className="header-button">
            <Button
              text="Erfahre mehr über uns"
              gridTemplateAreas={`'. icon text' 'vblue . .'`}
              textBackgroundColor="black"
              textColor="white"
              iconColor="yellow"
              link="/team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
