import React from "react";
import Card from "../../shared/card";
import members from "./data/team";

export default function Team() {
  return (
    <section id="team">
      <div className="grid grid-gap-0 p-grid-standard content ic-40 xl:ic-80">
        {members.map((member, index) => (
          <Card data-aos="fade-up" data-aos-duration="3000" key={index} member={member} />
        ))}
      </div>
    </section>
  );
}
