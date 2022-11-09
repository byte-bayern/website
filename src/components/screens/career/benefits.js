import React from "react";
import VerticalTile from "../../shared/verticalTile";
import {
  Calendar,
  Agile,
  Money,
  Network,
  Person,
  Prototype
} from "../../../assets/img/icons";

let benefits = [
  {
    title: "100% Purpose",
    component: Person,
    alt: "",
    content:
      "Als Mitar-byte-r:in bist du Teil von etwas Großem, etwas Bedeutendem, etwas, dass sich für unsere Gesellschaft auszahlt. Du gestaltest die Zukunft aktiv mit und tust nicht weniger, als Bayern zu digitalisieren.",
  },
  {
    title: "Unternehmenskultur",
    component: Agile,
    alt: "",
    content:
      "Unsere Unternehmenskultur ist noch im Entstehen, sie wächst und entwickelt sich - und sie ist uns sehr wichtig. Wir können sie nicht vorgeben, sie wird geformt durch jeden einzelnen und durch gegenseitigen Respekt und Vertrauen untereinander.",
  },
  {
    title: "Flexible Arbeitszeiten",
    component: Network,
    alt: "netzwerk",
    content:
      "Deine Work-Life-Balance liegt uns am Herzen. Deshalb bieten wir unseren Mitarbeitenden die verschiedensten hybriden Remotelösungen zum Arbeiten an.",
  },
  {
    title: "30 Urlaubstage im Jahr",
    component: Calendar,
    alt: "",
    content:
      "Egal ob es dich in ferne Länder zieht oder du Zuhause ausspannen möchtest – mit 30 Urlaubstagen hast du ausreichend Zeit, beides zu tun und aufzutanken.",
  },
  {
    title: "Überstundenregelung",
    component: Money,
    alt: "",
    content:
      "Wir sind eine Agentur mit einer 40 Stunden und 6 Minuten Woche (so ist das im öffentlichen Dienst ;-)). Aber mit quasi 40 meinen wir 40. Sicher gibt es auch mal Situationen, in denen du mehr als gewöhnlich gefordert bist, aber diese Zeit, die du mehr arbeitest, darfst du aufschreiben und abfeiern.",
  },
  {
    title: "Wähle deine eigene Hardware",
    component: Prototype,
    alt: "",
    content:
      "Jeder unserer Mitarbeitenden darf zwischen dem Macbook 14” oder dem Windows Surface wählen. Außerdem erhältst du ein Iphone als Firmenhandy.",
  },
];

export default function Benefits() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="facts">
      <div className="grid p-grid-standard grid-gap-0 content">
        {benefits.map((fact, index) => (
          <div className="col-12 md:col-6 xl:col-4" key={index}>
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
    </section>
  );
}
