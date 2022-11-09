import React from "react";
import Quote from "../../shared/quote";
import mds from "../../../assets/img/components/quote/mds.png";

export default function QuoteMD() {
  return (
    <section id="quote">
      <Quote
        image={mds}
        imageAltText="Halbkörperporträt von Frau Staatsminsiterin für Digitales Judith Gerlach"
        who={
          <p>
            Unsere Geschäftsführer:innen <strong>Antonia Zierer</strong> und <strong>Tino Kühnel</strong> über die byte:
            <br /><br />
            <strong>“Was hat euch zur byte gebracht?”</strong>   
          </p>
        }
        quote={
          <>
            <strong>Antonia:</strong> <blockquote>"Die erfolgreiche digitale Transformation unseres Staates ist essentiell für das Vertrauen unserer Bürger:innen in den Staat. Ich will meinen Beitrag leisten, dass wir die digitale Transformation erfolgreich umsetzen können."</blockquote>
            <br /><br />
            <strong>Tino:</strong> <blockquote>"Verwaltung sollte Bürger so wenig wie möglich belasten. Sie sollte einfach sein und sich an den Bedürfnissen ihrer Kunden:innen orientieren. Das möchte ich mit der byte erreichen."</blockquote>
          </>
        }
        side="right"
      />
    </section>
  );
}