import React from "react";
import HorizontalTile from "../../shared/horizontalTile";
import LineBreak from "../../shared/lineBreak";

let offers = [
  {
    id: "security",
    title: "Flexibilität und Sicherheit",
    align: "right",
    lang: "en",
    excerpt:
      "Unsere Unternehmenskultur ist so flexibel und zwanglos wie in einem Startup. Wir arbeiten gemeinsam und mit Spaß zusammen, um die an uns gestellten Aufgaben optimal zu erfüllen. Unsere modernen Arbeitsmethoden verbinden wir mit der Sicherheit und den Vorteilen des öffentlichen Sektors - Somit vereinen wir das Beste aus beiden Welten!",
    divider: true,
  },
  {
    id: "impact",
    title: "Mitgestaltung und Impact",
    align: "right",
    lang: "de",
    excerpt:
      "Du bist von Anfang an dabei, unsere Agentur aufzubauen und mitzugestalten. Du leistest einen entscheidenden Impact, damit die öffentliche Verwaltung das analoge Zeitalter hinter sich lässt und trägst gleichzeitig zum Gemeinwohl bei. Hierfür bieten wir dir vielseitige Gestaltungsmöglichkeiten, verantwortungsvolle Aufgaben und die Chance durch Etablierung neuer digitaler Strukturen und Prozesse beispielgebend für andere zu sein.",
    divider: true,
  },
  {
    id: "culture",
    title: "Weiterentwickelung und tolle Teamkultur",
    align: "right",
    lang: "de",
    excerpt:
      "Wir möchten, dass du bei uns einen Ort zum Austauschen, Lernen und für deine fachliche sowie persönliche Weiterentwicklung vorfindest. Und das in einer offenen Umgebung, in der Herausforderungen gemeinsam bewältigt werden und man füreinander da ist. Wir unterstützen einander und sind füreinander da. Unsere tragfähige Unternehmenskultur sorgt nicht nur für Spaß bei der Arbeit, sie reduziert auch das Risiko von Bore- oder Burn-outs.",
  },
];

export default function Offers() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="offers">
      <div className="p-grid-standard content">
        <div className="tc-blue display-2 ">Das erwartet dich bei uns</div>
      
        {offers.map((group, index) => (
          <div key={index}>
            <div id={group.id} className="p-grid-standard content">
              <HorizontalTile
                title={group.title}
                lang={group.lang}
                align={group.align}
                excerpt={group.excerpt}
              />
            </div>
            {group.divider ? <LineBreak /> : <br />}
          </div>
        ))}
      </div>
    </section>
  );
}
