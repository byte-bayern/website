import * as React from "react";
import DefautLayout from "../layouts/default";

const IndexPage = () => {
  return (
    <DefautLayout title="Impressum">
      <div className="p-standard content">
        <section id="header">
          <h1 className="py-20">Impressum</h1>
        </section>
        <h2 className="pt-50 pb-20">Herausgeber</h2>
        <p>
          <strong>byte - Bayerische Agentur für Digitales GmbH</strong>
          <br />
          Oskar-von-Miller-Ring 35
          <br />
          80333 München
          <br />
          Telefon: 0162 / 2019793
          <br />
          E-Mail:{' '}
          <a href="mailto:kontakt@byte.bayern">
            kontakt@byte.bayern
          </a>
          <br /><br />
          Vertretungsberechtigte:<br />
          Antonia Zierer (Geschäftsführerin)<br/>
          Thorsten Kühnel (Geschäftsführer)<br/>
          <br />
          Registergericht: Amtsgericht München, HRB 273196<br/>
          USt-Identifikationsnummer (gemäß § 27 a Umsatzsteuergesetz): DE354823776
          <br />
        </p>
      
        <h2 className="pt-50 pb-20">Verantwortlich für den Inhalt</h2>
        <p>
          Vertretungsberechtigte:<br/>
          Antonia Zierer (Geschäftsführerin)<br/>
          Thorsten Kühnel (Geschäftsführer)<br/>
          <br/>
          E-Mail:{' '}<a href="mailto:kontakt@byte.bayern">kontakt@byte.bayern</a><br/>
          <br/>
          Namentlich gekennzeichnete Internetseiten geben die Auffassungen und Erkenntnisse der genannten Personen wieder.
        </p>

        <h2 className="pt-50 pb-20">Nutzungsbedingungen</h2>
        <p>
          Texte, Bilder, Grafiken sowie die Gestaltung dieser Internetseiten unterliegen dem Urheberrecht.
          Nicht urheberrechtlich geschützt sind nach § 5 des Urheberrechtsgesetz (UrhG)
        </p>
        <ul className="pl-50 pt-20">
          <li>
            Gesetze, Verordnungen, amtliche Erlasse und Bekanntmachungen sowie Entscheidungen und 
            amtlich verfasste Leitsätze zu Entscheidungen und
          </li>
          <li>
            andere amtliche Werke, die im amtlichen Interesse zur allgemeinen Kenntnisnahme veröffentlicht worden sind, 
            mit der Einschränkung, dass die Bestimmungen über Änderungsverbot und Quellenangabe in § 62 Abs. 1 bis 3 und § 63 Abs. 1 und 2 UrhG entsprechend anzuwenden sind.
          </li>
        </ul>
        <p className="pt-20">
          Sie dürfen von Ihnen nur zum privaten und sonstigen eigenen Gebrauch im Rahmen des § 53 Urheberrechtsgesetz (UrhG) verwendet werden. Eine Vervielfältigung oder Verwendung dieser Seiten oder Teilen davon in anderen elektronischen oder gedruckten Publikationen und deren Veröffentlichung ist nur mit unserer Einwilligung gestattet. Diese erteilen auf Anfrage die für den Inhalt Verantwortlichen. Weiterhin können Texte, Bilder, Grafiken und sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter unterliegen. Auch über das Bestehen möglicher Rechte Dritter geben Ihnen die für den Inhalt Verantwortlichen nähere Auskünfte.
        </p>
        <p className="pt-20">
          Der Nachdruck und die Auswertung von Pressemitteilungen und Reden sind mit Quellenangabe allgemein gestattet.
        </p>

        <h2 className="pt-50 pb-20">Bildnachweis</h2>
        <p>
          Die Bildrechte für die auf dieser Webseite verwendeten Bilder sind geklärt. Quellenangaben erfolgen in der Bildunterschrift oder im Alternativtext zum Bild. Bilder ohne explizite Quellenangaben sind grundsätzlich mit Quelle „byte - Bayerische Agentur für Digitales GmbH” zu führen. Ihre Nutzung bedarf der Zustimmung der byte – Bayerische Agentur für Digitales GmbH. Sollten Sie sich, trotz aller Sorgfalt unserer Arbeit, in einem Bildrecht verletzt fühlen, wenden Sie sich bitte an <a href="mailto:kontakt@byte.bayern">kontakt@byte.bayern</a>.
        </p>

        <h2 className="pt-50 pb-20">Haftungsausschluss</h2>
        <p>
          Alle auf dieser Internetseite bereitgestellten Informationen haben wir nach bestem Wissen und Gewissen erarbeitet und geprüft. Eine Gewähr für die jederzeitige Aktualität, Richtigkeit, Vollständigkeit und Verfügbarkeit der bereit gestellten Informationen können wir allerdings nicht übernehmen. Ein Vertragsverhältnis mit den Nutzern des Internetangebots kommt nicht zustande.
        </p>
        <p className="pt-20">
          Wir haften nicht für Schäden, die durch die Nutzung dieses Internetangebots entstehen. Dieser Haftungsausschluss gilt nicht, soweit die Vorschriften des § 839 BGB (Haftung bei Amtspflichtverletzung) einschlägig sind. Für etwaige Schäden, die beim Aufrufen oder Herunterladen von Daten durch Schadsoftware oder der Installation oder Nutzung von Software verursacht werden, übernehmen wir keine Haftung.
        </p>

        <h2 className="pt-50 pb-20">Links</h2>
        <p>
          Von unseren eigenen Inhalten sind Querverweise („Links“) auf die Webseiten anderer Anbieter zu unterscheiden. Durch diese Links ermöglichen wir lediglich den Zugang zur Nutzung fremder Inhalte nach § 8 Telemediengesetz. Bei der erstmaligen Verknüpfung mit diesen Internetangeboten haben wir diese fremden Inhalte daraufhin überprüft, ob durch sie eine mögliche zivilrechtliche oder strafrechtliche Verantwortlichkeit ausgelöst wird. Wir können diese fremden Inhalte aber nicht ständig auf Veränderungen überprüfen und daher auch keine Verantwortung dafür übernehmen. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung von Informationen Dritter entstehen, haftet allein der jeweilige Anbieter der Seite.
        </p>

        <h2 className="pt-50 pb-20">Gender-Hinweis</h2>
        <p>
          Aus Gründen der leichteren Lesbarkeit und der Nutzerfreundlichkeit wird auf die gleichzeitige Verwendung der männlichen und weiblichen Personenbezeichnung verzichtet. Die Verwendung der männlichen Form schließt die weibliche Form mit ein.
        </p>
      </div>
    </DefautLayout>
  );
};

export default IndexPage;
