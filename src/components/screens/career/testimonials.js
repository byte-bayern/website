import React from "react";
import VerticalTile from "../../shared/verticalTile";
import LC from "../../../assets/img/components/team/LC.png";
import NT from "../../../assets/img/components/team/NT.png";
import HS from "../../../assets/img/components/team/HS.png";

let roles = [
  {
    title: "“Wenn die byte eine Person wäre, wie würdest du diese charakterisieren?“",
    subTitle: "Laura Crompton, Beraterin:",
    description:
      "Die byte ist für mich eine Person die dynamisch und standhaft ist; sie ist freundlich und hartnäckig, und versucht sich nicht unterkriegen zu lassen. All das aber immer mit ausgesprochenem Charme und Taktgefühl.",
    image: LC
  },
  {
    title: "“Wie gestaltet die byte digitalte Transformation?”",
    subTitle: "Nhien Thai, UX/UI Designerin:",
    description:
      "Die byte gestaltet digitale Transformation idealerweise nach außen. Aber auch stark nach innen, weil wir als Mitarbeitende, die letztlich die byte ausmachen, diese auch mitgestalten können. Wir definieren unseren Umgang miteinander, wie wir die Teams aufbauen, wie wir nutzerzentriert arbeiten oder z.B. ganz konkret, dass wir Probleme mit selbstgegründeteten AG’s lösen und damit mitgestalten.",
    image: NT,
  },
  {
    title: "“Was hat dich zur byte gebracht?”",
    subTitle: "Hendrik Schöning, Produkt Manager:",
    description: "Zur byte bin ich gekommen, weil sie einer extrem guten und wichtigen Sache nachgeht, die ich selbst sehr gerne verwirklicht sehen würde. Und ich habe mir das aktuelle Team angeschaut, denn die byte charakterisiert sich ganz stark aus den Köpfen, die dabei sind.",
    image: HS,
  },
];
export default function Testimonials() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" className="roles ic-40 xl:ic-80 content">
      <p className="display-2 tc-blue px-standard">
        Insights aus dem Team<br />
      </p>
      <div className="grid grid-gap-0  p-grid-standard">
        {roles.map((role, index) => (
          <div key={index} className="col-12 md:col-6 xl:col-4">
                <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100">
                  <div className="col-12">
                    <div className="pb-20">
                      <div className="imageButton">
                        <img className="image" src={role.image} alt=""></img>
                      </div>
                    </div>
                    <p className={`body-2 fw-bold ${role.className}`}><blockquote>{role.title}</blockquote></p>
                    <p className="body-1">{role.subTitle} </p>
                      <div className="py-10">
                        <p
                          className={
                            role.description.size ? `${role.description.size}` : `body-1`
                          }
                        >
                          {role.description}
                        </p>
                      </div>
                  </div>
                </div>
          </div>
        ))}
      </div>
    </section>
  );
}
