import React from "react";
import HorizontalTile from "../../shared/horizontalTile";
import LineBreak from "../../shared/lineBreak";

let insight = [
  {
    id: "motivator",
    title: "Was uns antreibt",
    align: "right",
    lang: "en",
    excerpt:
      "Unsere Vision ist, dass digitale Verwaltung irgendwann so einfach wird wie Online-Shopping. Um dies zu erreichen, können wir jedoch nicht wie ein Start-up auf der grünen Wiese anfangen und alles neu aufbauen. Wir wollen gemeinsam mit unseren Kolleg:innen in den Ministerien und staatlichen Behörden die bestehenden Lösungen weiterentwickeln. Das beginnt für uns mit einer gründlichen Analyse und Evaluation der bestehenden Prozesse und Systeme. Basierend auf diesen Erkenntnissen können wir dann gemeinsam Lösungen und Produkte entwickeln, die zum einen auf die Bedürfnisse der öffentlichen Verwaltung und zum anderen auf die Bedürfnisse der Bürger:innen eingehen.",
    divider: true,
  },
  {
    id: "appreciate",
    title: "Was wir wertschätzen",
    align: "right",
    lang: "de",
    excerpt:
      "Die Digitalisierung der öffentlichen Verwaltung ist ein großes Vorhaben das Herausforderungen unterschiedlichster Art mit sich bringt. Unsere Antwort darauf ist ein diverses Team mit Hintergründen ebenso unterschiedlichster Art. Zusammengeschweißt und getrieben durch ähnliche Werte und Prinzipien möchten wir unsere Ziele in die Realität umzusetzen.",
    divider: true,
  },
  {
    id: "work",
    title: "Wie wir arbeiten",
    align: "right",
    lang: "de",
    excerpt:
      "Wir denken, dass Digitalisierung dann am besten funktioniert, wenn sie gemeinsam mit den Personen, die direkt davon betroffen sind, gestaltet wird. Dieses Vorgehen wird als “nutzerzentriertes Design” bezeichnet. Um das tatsächlich umsetzen zu können, stehen Kommunikation und Austausch bei uns an oberster Stelle. Ändern sich die Bedürfnisse oder Kontexte der von einem Projekt betroffenen Personen, so passt sich das Projekt entsprechend an.",
  },
];

export default function Insights() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="insights">
      <div className="p-grid-standard content">
        <div className="tc-blue display-2 ">Wie wir Ticken</div>
      
        {insight.map((group, index) => (
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
