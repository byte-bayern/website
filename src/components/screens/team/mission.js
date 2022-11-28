import React from "react";
import ColumnText from "../../shared/columnText";

export default function Mission() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="introduction">
        <ColumnText
            nrColumns="2"
            textLeftStyle="display-2 tc-blue"
            textLeft="Byte - Bayerische Agentur für Digitales"
            textRight={
            <>
                <p className="pb-20">
                    <strong>Unsere Mission:</strong>
                </p>
                <p>
                    Wir gestalten die digitale Transformation der öffentlichen Verwaltung des Freistaates Bayern aktiv und menschzentriert.
                </p>
            </>
            }
        />
        </section>
  )
}