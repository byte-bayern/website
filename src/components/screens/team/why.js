import React from "react";
import ColumnText from "../../shared/columnText";
import StmdLogo from "../../../assets/img/components/brand/stmdLogo.svg";

export default function Why() {
  return (
    <section>
        <ColumnText
            nrColumns="2"
            textLeftStyle="display-2 tc-blue"
            textLeft="Warum gibt es uns?"
            textRight={
            <>
                <p>
                    Die Digitalagentur wurde als Teil des <strong>Digitalpakets</strong> von <strong>Staatsministerin Judith Gerlach</strong> initiiert und von der Bayerischen Staatsregierung am 07. Dezember 2021 beschlossen.
                    <br/><br/>
                    Um für unsere Bürgerinnen und Bürger, für unsere Unternehmen, aber auch für die Verwaltung selbst mehr digitale Angebote zu schaffen, hat die Bayerische Staatsregierung beschlossen, eine zentrale Beratungs- und Unterstützungseinheit für digitale Transformation aufzubauen. Bayern orientiert sich dabei am Vorbild anderer Staaten, die erfolgreich ihre Verwaltung digitalisieren.
                </p>
                <img src={StmdLogo} className="img-w-250 pt-20" alt="Logo des Staatsministeriums für Digitales" />
            </>
            }
        />
        </section>
  )
}