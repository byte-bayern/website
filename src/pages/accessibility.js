import * as React from "react";
import DefautLayout from "../layouts/default";

const AccessibilityPage = () => {
  return (
    <DefautLayout title="Digitale Barrierefreiheit">
      <div className="p-standard content">
        <section id="header">
          <h1 className="py-20">Digitale Barrierefreiheit</h1>
          <h2 className="pt-50 pb-20">Erklärung zur Barrierefreiheit</h2>
          <p>
            Die byte - Bayerische Agentur für Digitales GmbH (byte) legt großen Wert auf die barrierefreie Nutzbarkeit ihres Angebots für alle Bürgerinnen und Bürger sowie Nutzerinnen und Nutzer. Als öffentliche Stelle im Sinne der Richtlinie (EU) 2016/2102 sind wir bemüht, unsere Websites und mobilen Anwendungen zur Umsetzung der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen.
          </p>
          <p className="pt-20">
            Rechtsgrundlage für die barrierefreie Gestaltung ist die Bayerische E-Government-Verordnung (BayEGovV).
          </p>
          <p className="pt-20">
            Diese Erklärung zur Barrierefreiheit gilt für den Internetauftritt unter www.byte.bayern.
          </p>
        </section>

        <h2 className="pt-50 pb-20">Erstellung dieser Erklärung zur Barrierefreiheit</h2>

        <p>Diese Erklärung wurde am 14.10.2022 erstellt.</p>
        <br/>

        <h2 className="pt-50 pb-20">Nicht barrierefreie Inhalte</h2>
        <ul>
            <li>Bedienelemente für Vergößern und Verkleinern und Bedienelemente für Links besitzen keine Alt Attribute</li>
            <li>Grafiken besitzen kein Leeres alt Attribut</li>
            <li>Auf keiner Seite gibt es Überschriften</li>
            <li>Bei der Linearisierung gehen 2 funktionstragende Schaltflächen verloren</li>
            <li>Die Kontraste der Barrierefreiheitsfunktionen kontrastieren nicht überall hinreichend</li>
            <li>Seite bietet keine zweite Zugangsmethode</li>
            <li>Fokus ist nicht klar erkennbar</li>
            <li>Die Schalter der Fließtexte zu weiterführenden Links haben weder einen sichtbare Beschriftung - noch ist das jeweilige Ziel aus dem Fließtext ermittelbar</li>
        </ul>

        <h2 className="pt-50 pb-20">Unterstützungen zur Barrierefreiheit</h2>
        <p>Für eine möglichst barrierearme Verwendung der Webseite bieten wir Ihnen aktuell folgende Unterstützungen, die Sie auf der rechten Seite aktivieren können:</p>
        <ul>
            <li>Kontraste erhöhen/verringern: mit dieser Funktion können Sie die Kontraste der Inhalte erhöhen und verringern, um eine bessere Lesbarkeit und Erkennbarkeit sicherzustellen.</li>
            <li>Schrift vergrößern oder verkleinern</li>
        </ul>

        <h2 className="pt-50 pb-20">Barrieren melden sowie Informationen zur Barrierefreiheit dieser Website</h2>
        
        
        <p>Sie möchten uns bestehende Barrieren mitteilen oder Informationen zur Umsetzung der Barrierefreiheit erfragen? Für Ihr Feedback sowie alle weiteren Informationen sprechen Sie unsere verantwortlichen Kontaktpersonen unter kontakt@byte.bayern an.</p>

        <h2 className="pt-50 pb-20">Ansprechpartner für die barrierefreie Zugänglichkeit ist:</h2>

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
            
        </p>    

        <h2 className="pt-50 pb-20">Durchsetzungsverfahren</h2>
        <p>Im Rahmen eines Durchsetzungsverfahrens haben Sie die Möglichkeit, online einen Antrag auf Prüfung der Einhaltung der Anforderungen an die Barrierefreiheit zu stellen.</p>
        <br/>
        Antrag auf Prüfung der Anforderungen an die Barrierefreiheit gem. § 3 BayEGovV können Sie <a href="https://formularserver.bayern.de/intelliform/assistants/intelliForm-Mandanten/rzsued/Assistants-Dialoge/ldbv/anforderungen_barrierefreiheit/dialog;jsessionid=2llt-K5u_run-5J6emtxUxc-EeliE3UoR63sHJVD.IF1?state=5cf05ab73ca4d60&cc=YtDRdXtzUOv6ufqF3nJY8TnhRQjx3Ts-4Sj7NyeL-0" target="_blank" rel="noreferrer">hier</a> stellen.

        <h3 className="py-10">Kontaktdaten der Durchsetzungsstelle:</h3>

        <p>   
            Landesamt für Digitalisierung, Breitband und Vermessung
            <br/>
            IT-Dienstleistungszentrum des Freistaats Bayern
            <br/>
            Durchsetzungs- und Überwachungsstelle für barrierefreie Informationstechnik
            <br/>
            St.-Martin-Straße 47
            <br/>
            81541 München
            <br/>
            E-Mail: <a href="mailto:bitv@bayern.de">bitv@bayern.de</a>
            <br/>
            <a href="https://www.ldbv.bayern.de/digitalisierung/bitv.html">https://www.ldbv.bayern.de/digitalisierung/bitv.html</a>
        </p>

        <h2 className="pt-50 pb-20">Schlichtungsverfahren</h2>
        <p>Wenn auch nach Ihrem Feedback an den oben genannten Kontakt keine zufriedenstellende Lösung gefunden wurde, können Sie sich an die Schlichtungsstelle nach § 16 Behindertengleichstellungsgesetz (BGG) wenden. Die Schlichtungsstelle BGG hat die Aufgabe, bei Konflikten zum Thema Barrierefreiheit zwischen Menschen mit Behinderungen und öffentlichen Stellen des Bundes eine außergerichtliche Streitbeilegung zu unterstützen. Das Schlichtungsverfahren ist kostenlos. Es muss kein Rechtsbeistand eingeschaltet werden. Weitere Informationen zum Schlichtungsverfahren und den Möglichkeiten der Antragstellung erhalten Sie unter: <a href="www.schlichtungsstelle-bgg.de">www.schlichtungsstelle-bgg.de</a>.</p>
        <br/>
        <p>Direkt kontaktieren können Sie die Schlichtungsstelle BGG unter <a href="mailto:info@schlichtungsstelle-bgg.de">info@schlichtungsstelle-bgg.de</a>.</p>
      </div>
    </DefautLayout>
  )}

  export default AccessibilityPage;