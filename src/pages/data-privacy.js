import * as React from "react";
import DefaultLayout from "../layouts/default";

const IndexPage = () => {
  return (
    <DefaultLayout title="Datenschutzerklärung">
      <div className="content p-standard">
      <section id="header">
        <h1 className="pb-50">
          Datenschutz
        </h1>
        <h2 className="pb-20">Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung bezieht sich auf die Verarbeitung personenbezogener Daten im Rahmen dieses Internetauftritts, einschließlich der dort angebotenen Dienste.
        </p>
        <p className="pt-20">
          Für nähere Informationen zur Verarbeitung Ihrer personenbezogenen Daten können Sie uns unter den genannten Kontaktdaten unter “Allgemeine Hinweise” erreichen.
        </p>
      </section>

        <h2 className="pt-50 pb-20">Allgemeine Hinweise</h2>
        <h3 className="pb-10">Name und Kontaktdaten des Verantwortlichen</h3>
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
        <h3 className="pb-10 pt-20">Zwecke und Rechtsgrundlagen für die Verarbeitung personenbezogener Daten</h3>
        <p>
          Bei der Verarbeitung Ihrer personenbezogenen Daten werden die Bestimmungen der Datenschutzgrundverordnung (DSGVO) und alle sonstigen geltenden datenschutzrechtlichen Bestimmungen eingehalten. Rechtsgrundlagen für die Datenverarbeitung ergeben sich insbesondere aus Art. 6 DSGVO. Wir verwenden Ihre Daten zur Geschäftsanbahnung, zur Erfüllung vertraglicher und gesetzlicher Pflichten, zur Durchführung des Vertragsverhältnisses, zum Anbieten von Produkten und Dienstleistungen sowie zur Stärkung der Kundenbeziehung, was auch Analysen zu Marketingzwecken und Direktwerbung beinhalten kann.
        </p>
        <p className="pt-20">
          Das Leistungsangebot der byte – Bayerische Agentur für Digitales GmbH umfasst:
          <ul className="pt-20 pl-50">
            <li>die Durchführung von Veranstaltungen</li>
            <li>die Anbahnung und Unterstützung von Kooperationen</li>
            <li>die Unterstützung bei unter anderem Markterkundung, Ausschreibung und Projektmanagement</li>
          </ul>
        </p>
        <p className="pt-20">
          Ihre Einwilligung stellt ebenfalls eine datenschutzrechtliche Erlaubnisvorschrift dar. Hierbei klären wir Sie über die Zwecke der Datenverarbeitung und über Ihr Widerrufsrecht auf. Sollte sich die Einwilligung auch auf die Verarbeitung besonderer Kategorien von personenbezogenen Daten beziehen, werden wir Sie in der Einwilligung ausdrücklich darauf hinweisen.
        </p>
        <p className="pt-20">
          Eine Verarbeitung besonderer Kategorien personenbezogener Daten i.S.v. Art. 9 Absatz 1 DSGVO erfolgt nur dann, wenn dies aufgrund rechtlicher Vorschriften erforderlich ist und kein Grund zu der Annahme besteht, dass Ihr schutzwürdiges Interesse an dem Ausschluss der Verarbeitung überwiegt.
        </p>
        <h3 className="pb-10 pt-20">Empfänger von personenbezogenen Daten</h3>
        <p>
          Der technische Betrieb unserer Datenverarbeitungssysteme erfolgt durch:<br/><br/>

          UnternehmerTUM GmbH<br/>
          Lichtenbergstr. 6<br/>
          85748 Garching b. München 
        </p>
        <p className="pt-20">
          <strong>Vertreten durch</strong>
          <br/>
          Prof. Dr. Helmut Schönenberger (CEO)<br/>
          Claudia Frey<br/>
          Stefan Drüssler<br/>
          Thomas Zeller
        </p>
        <p className="pt-20">
          <strong>Kontakt</strong>
          <br/>
          +49 89-18 94 69-0<br/>
          +49 89-18 94 69-1199<br/>
          <a href="mailto:info@unternehmertum.de">info@unternehmertum.de</a>
        </p>
        <p className="pt-20">
          Gegebenenfalls werden Ihre Daten an die zuständigen Aufsichts- und Rechnungsprüfungsbehörden zur Wahrnehmung der jeweiligen Kontrollrechte übermittelt.
        </p>
        <p className="pt-20">
          Zur Abwehr von Gefahren für die Sicherheit in der Informationstechnik können bei elektronischer Übermittlung Daten an das Landesamt für Sicherheit in der Informationstechnik weitergeleitet werden und dort auf Grundlage von Art. 12 ff. des Bayerischen E-Government-Gesetzes verarbeitet werden.
        </p>

        <h3 className="pb-10 pt-20">Dauer der Speicherung der personenbezogenen Daten</h3>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie dies für die Erreichung des jeweiligen Speicherzwecks erforderlich ist oder dies durch gesetzliche Aufbewahrungsfristen vorgeschrieben ist.
        </p>

        <h3 className="pb-10 pt-20">Rechte der betroffenen Person</h3>
        <p>
          Soweit wir von Ihnen personenbezogene Daten verarbeiten, stehen Ihnen als Betroffener nachfolgende Rechte zu:
          <ul className="pt-20 pl-50">
            <li>Werden Ihre personenbezogenen Daten verarbeitet, so haben Sie das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten (Art. 15 DSGVO).</li>
            <li>Sollten unrichtige personenbezogene Daten verarbeitet werden, steht Ihnen ein Recht auf Berichtigung zu. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie ebenfalls das Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden Erklärung – zu verlangen (Art. 16 DSGVO).</li>
            <li>Liegen die gesetzlichen Voraussetzungen vor, so können Sie die Löschung oder Einschränkung der Verarbeitung verlangen, sowie Widerspruch gegen die Verarbeitung einlegen (Art. 17, 18 und 21 DSGVO).</li>
            <li>Wenn Sie in die Verarbeitung eingewilligt haben oder ein Vertrag zur Datenverarbeitung besteht und die Datenverarbeitung mithilfe automatisierter Verfahren durchgeführt wird, steht Ihnen gegebenenfalls ein Recht auf Datenübertragbarkeit zu (Art. 20 DSGVO).</li>
            <li>Falls Sie in die Verarbeitung eingewilligt haben und die Verarbeitung auf dieser Einwilligung beruht, können Sie die Einwilligung jederzeit für die Zukunft widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Datenverarbeitung wird durch diesen nicht berührt.</li>
          </ul>
        </p>

        <h3 className="pb-10 pt-20">Beschwerderecht bei der Aufsichtsbehörde</h3>
        <p>
          Weiterhin besteht ein Beschwerderecht beim Bayerischen Landesbeauftragten für den Datenschutz (BayLfD). Diesen können Sie unter folgenden Kontaktdaten erreichen:
          <br/><br/>
          Postanschrift: Postfach 22 12 19, 80502 München<br/>
          Adresse: Wagmüllerstraße 18, 80538 München<br/>
          Telefon: 089 / 212672-0<br/>
          Telefax: 089 / 212672-50<br/>
          E-Mail: <a href="poststelle@datenschutz-bayern.de">poststelle@datenschutz-bayern.de</a><br/>
          Internet: <a href="https://www.datenschutz-bayern.de" target="_blank" rel="noreferrer">www.datenschutz-bayern.de</a>
        </p>


        <h2 className="pt-50 pb-20">Hinweise zum Internetangebot</h2>
        <h3 className="pb-10">Technische Umsetzung</h3>
        <p>
        Der technische Betrieb dieser Webseite erfolgt durch:
        <br/><br/>
        UnternehmerTUM GmbH<br/>
        Lichtenbergstr. 6<br/>
        85748 Garching b. München<br/>
        +49 89-18 94 69-0<br/>
        +49 89-18 94 69-1199<br/>
        <a href="mailto:kontakt@unternehmertum.de">kontakt@unternehmertum.de</a>
        </p>

        <h3 className="pb-10">Protokollierung</h3>
        <p>
          Wenn Sie diese oder andere Internetseiten aufrufen, übermitteln Sie über Ihren Internetbrowser Daten an unseren Webserver. Die folgenden Daten werden während einer laufenden Verbindung zur Kommunikation zwischen Ihrem Internetbrowser und unserem Webserver aufgezeichnet:
          <ul className="pt-20 pl-50">
            <li>Datum und Uhrzeit der Anforderung</li>
            <li>Name der angeforderten Datei</li>
            <li>Seite, von der aus die Datei angefordert wurde</li>
            <li>Zugriffsstatus (beispielsweise Datei übertragen, Datei nicht gefunden)</li>
            <li>verwendete Webbrowser und verwendetes Betriebssystem</li>
            <li>vollständige IP-Adresse des anfordernden Rechners</li>
            <li>übertragene Datenmenge</li>
          </ul>
        </p>
        <p className="pt-20">
          Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr von Angriffsversuchen auf unseren Webserver, werden diese Daten von uns gespeichert. Nach spätestens sieben Tagen werden die Daten durch Verkürzung der IP-Adresse auf Domain-Ebene anonymisiert, so dass es nicht mehr möglich ist, einen Bezug auf einzelne Nutzer herzustellen.
        </p>
        <p>
          Zur Abwehr von Gefahren für die Sicherheit in der Informationstechnik werden die Daten an das Landesamt für Sicherheit in der Informationstechnik weitergeleitet und dort auf Grundlage der Art. 12 ff. des Bayerischen E-Government-Gesetzes verarbeitet.
        </p>

        <h3 className="pb-10">Aktive Komponenten</h3>
        <p>
        Wir verwenden aktive Komponenten wie Javascript, Java-Applets oder Active-X-Controls. Diese Funktion kann durch die Einstellung Ihres Internetbrowsers von Ihnen abgeschaltet werden.
        </p>

        <h3 className="pb-10">Cookies</h3>
        <p>
        Beim Zugriff auf dieses Internetangebot werden von uns Cookies (kleine Dateien) auf Ihrer Festplatte mit einer Gültigkeitsdauer von 12 Monaten gespeichert. Wir verwenden diese ausschließlich dazu, Sie bei diesem und weiteren Besuchen unserer Webseite zu identifizieren. Die meisten Browser sind so eingestellt, dass sie die Verwendung von Cookies akzeptieren, diese Funktion kann aber durch die Einstellung des Internetbrowsers von Ihnen für die laufende Sitzung oder dauerhaft abgeschaltet werden.
        </p>

        <h2 className="pt-50 pb-20">Informationen zu weiteren Datenverarbeitungen</h2>
        <h3 className="pb-10">Elektronische Post (E-Mail)</h3>
        <p>
        Informationen, die unverschlüsselt per Elektronische Post (E-Mail) an byte - Bayerische Agentur für Digitales GmbH gesendet werden, können möglicherweise auf dem Übertragungsweg von Dritten gelesen werden. Wir können in der Regel auch die Identität nicht überprüfen und wissen nicht, wer sich hinter einer E-Mail-Adresse verbirgt. Eine rechtssichere Kommunikation durch einfache E-Mail ist daher nicht gewährleistet. Wir setzen – wie viele E-Mail-Anbieter – Filter gegen unerwünschte Werbung (SPAM-Filter) ein, die in seltenen Fällen auch normale E-Mails fälschlicherweise automatisch als unerwünschte Werbung einordnen und löschen können. E-Mails, die schädigende Programme (Viren) enthalten, werden in jedem Fall automatisch gelöscht.
        </p>

        <h3 className="pb-10">Veranstaltungen von byte - Bayerische Agentur für Digitales GmbH</h3>
        <p>
        byte – Bayerische Agentur für Digitales GmbH tritt auch als Organisator oder Mitorganisator diverser Veranstaltungen auf.
        </p>
        <p className="pt-20">
        Im Falle einer Einladung zu oder Teilnahme an einer Veranstaltung verarbeitet byte – Bayerische Agentur für Digitales GmbH personenbezogene Daten (Name, Adresse etc.). Dies kann über verschiedene Kommunikationswege erfolgen, zum Beispiel durch Ausfüllen eines Formulars, eines Webformulars, per E-Mail, per Telefon.
        </p>
        <p className="pt-20">
        Welche personenbezogenen Daten dabei an byte – Bayerische Agentur für Digitales GmbH übermittelt werden, ergibt sich aus dem jeweiligen Formular, der jeweiligen Eingabemaske beziehungsweise den in einem etwaigen Gespräch abgefragten Daten.
        <ul className="pt-20 pl-50">
          <li>Datenerhebung von BegleitpersonenFür die ordnungsgemäße Abwicklung der Veranstaltung werden dabei auch Daten von Begleitpersonen der eingeladenen Teilnehmer erhoben und verarbeitet. Diesen stehen ebenso wie allen anderen von Datenerhebungen Betroffenen die oben genannten Rechte zu, insbesondere auf Auskunft über Art und Umfang der gespeicherten Daten, Widerspruch gegen die Verarbeitung und Löschung der Daten. Insofern wird auf die Ausführungen zu den Rechten der betroffenen Personen verwiesen.</li>
          <li>Datenerhebung aus öffentlich zugänglichen Quellenbyte – Bayerische Agentur für Digitales GmbH erhebt und verarbeitet darüber hinaus zu diesem Zweck auch Daten, die aus öffentlich zugänglichen Quellen stammen, zum Beispiel von Homepages der betroffenen Personen oder aus öffentlich zugänglichen Verzeichnissen.</li>
          <li>Weiteres Verfahren bei diesen DatenerhebungenDie personenbezogenen Daten werden nicht unbefugt an Dritte übermittelt, sondern für die interne Verwendung bei byte – Bayerische Agentur für Digitales GmbH und für den Zweck der Organisation und Abwicklung von Veranstaltungen (etwa Erstellung von Gästelisten, Ermöglichung von Zugangskontrollen etc.) gespeichert und verarbeitet. byte – Bayerische Agentur für Digitales GmbH kann die Weitergabe an einen oder mehrere Auftragsverarbeiter veranlassen, der die personenbezogenen Daten im Auftrag von byte – Bayerische Agentur für Digitales GmbH nur für eine interne Verwendung, die byte – Bayerische Agentur für Digitales GmbH zuzurechnen ist, nutzt.</li>
          <li>Je nach Art der Veranstaltung tritt byte – Bayerische Agentur für Digitales GmbH neben einem weiteren Kooperationspartner als Mitveranstalter auf. In diesen Fällen werden die zu Veranstaltungszwecken erhobenen Daten an unsere Kooperationspartner übermittelt, wobei diese die Daten ebenfalls ausschließlich zu diesem Zweck der ordnungsgemäßen Abwicklung der Veranstaltung verwenden dürfen. Welche Kooperationspartner dies im Einzelfall sind, wird gesondert im Rahmen der Organisation der Veranstaltung jeweils mitgeteilt.</li>
        </ul>
        </p>
        <p className="pt-20">
          Die Daten werden nur so lange gespeichert, wie dies für die Organisation und Abwicklung der Veranstaltungen sowie für unsere Aufgabenwahrnehmung im Bereich der Öffentlichkeitsarbeit erforderlich ist.
        </p>
        <p className="pt-20">
          Als Empfänger von Anschreiben/Einladungen können Sie jederzeit der Zusendung weiterer Anschreiben/Einladungen widersprechen.
        </p>

        <h3 className="pb-10">Fotoaufnahmen</h3>
        <p>
          Im Rahmen unserer Presse- und Öffentlichkeitsarbeit werden bei Veranstaltungen und Terminen Fotos und Videos aufgenommen, auf denen Sie gegebenenfalls erkennbar zu sehen sind. Der Aufnahme und/oder einer Veröffentlichung können Sie widersprechen.
          <br/><br/>
          Bitte nutzten Sie für Ihren Widerspruch die oben genannten Kontaktdaten.
        </p>

        <h2 className="pt-50 pb-20">Datenschutzhinweise zur Verarbeitung von personenbezogenen Daten von Bewerber:innen</h2>
        <p>
          byte – Bayerische Agentur für Digitales GmbH erhebt und verarbeitet die personenbezogenen Daten von Bewerbern zum Zwecke der Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist insbesondere dann der Fall, wenn ein Bewerber entsprechende Bewerbungsunterlagen auf dem elektronischen Wege, beispielsweise per E-Mail, übermittelt. Kommt es zu einem Beschäftigungsverhältnis mit einem Bewerber, werden die übermittelten Daten zum Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen Vorschriften gespeichert. Zudem können Daten im Einstellungsverfahren an Partner, die für die Abwicklung des Beschäftigungsverhältnisses zuständig sind, übermittelt werden. Kommt es zu keinem Beschäftigungsverhältnis, so werden die Bewerbungsunterlagen nach Bekanntgabe der Absageentscheidung nach den einschlägigen Vorschriften gelöscht, sofern einer Löschung keine sonstigen berechtigten Interessen byte – Bayerische Agentur für Digitales GmbH entgegenstehen. Sonstiges berechtigtes Interesse in diesem Sinne ist beispielsweise eine Beweispflicht in einem Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG).
        </p>
        <p className="pt-20">
          Sie möchten sich initiativ oder auf eine ausgeschriebene Stelle bei uns bewerben. Dabei ist uns der Schutz Ihrer persönlichen Daten sehr wichtig.
        </p>
        <p className="pt-20">
          Gemäß Art. 13 der Datenschutz-Grundverordnung (DSGVO) informieren wir Sie über die Verarbeitung personenbezogener Daten im Rahmen Ihrer Bewerbung:
        </p>

        <h3 className="pt-20 pb-10">1. Verantwortlicher:</h3>
        <p>
          Verantwortlich für die Datenerhebung ist die<br/><br/>
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
        <h3 className="pt-20 pb-10">2. Zweck und Rechtsgrundlagen der Datenverarbeitung:</h3>
        <p>
        Ihre personenbezogenen Daten werden zum Zweck der Durchführung des Bewerbungsverfahrens erhoben, gespeichert und elektronisch verarbeitet.
        <br/><br/>
        Rechtsgrundlage ist Art. 6 Abs. 1 Buchstabe b DSGVO, Art. 9 Abs. 2 Buchst. b und h DSGVO, Art. 88 Abs. 1 DSGVO i. V. m. Art. 8 Abs. 1 Nrn. 2 und 3 BayDSG.
        </p>
        <h3 className="pt-20 pb-10">3. Empfänger der personenbezogenen Daten:</h3>
        <p>
          Innerhalb der byte – Bayerische Agentur für Digitales GmbH erhalten denjenigen Stellen und Personen Zugriff auf Ihre Daten, die diese im Rahmen der Durchführung des Bewerbungsverfahrens benötigen, in der Regel die Geschäftsführung.
          <br/><br/>
          Der technische Betrieb unserer Datenverarbeitungssysteme sowie Wartungs- und Supportleistungen erfolgt durch das IT-Dienstleistungszentrum am Landesamt für Digitalisierung, Breitband und Vermessung sowie die Personio GmbH als Auftragsverarbeiter.
        </p>
        <h3 className="pt-20 pb-10">4. Dauer der Speicherung Ihrer personenbezogenen Daten:</h3>
        <p>
          Die Daten von Bewerbern und Bewerberinnen, die ihre Bewerbung zurückgezogen haben, werden sofort gelöscht.
          <br/><br/>
          Die Daten von nicht erfolgreichen Bewerbern und Bewerberinnen werden 6 Monate nach Abschluss des jeweiligen Bewerbungsverfahrens gelöscht.
          <br/><br/>
          Die Daten von Bewerbern und Bewerberinnen, die sich initiativ beworben haben, werden nach ihrer Prüfung gelöscht, es sei denn der Bewerber oder die Bewerberin hat sich damit einverstanden erklärt, dass seine oder ihre Bewerberdaten längerfristig gespeichert werden. In diesem Fall werden sie ein Jahr nach Eingang der Zustimmung gelöscht.
          <br/><br/>
          Erfolgreiche Bewerber und Bewerberinnen werden gesondert über die dann geltenden Regelungen zum Umgang mit Ihren Daten informiert.
        </p>
        <h3 className="pt-20 pb-10">5. Betroffenenrechte:</h3>
        <p>
          Weiterhin möchten wir Sie über die Ihnen zustehenden Rechte nach der DSGVO informieren:
          <ul className="pt-20 pl-50">
            <li>Werden Ihre personenbezogenen Daten verarbeitet, so haben Sie das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten (Art. 15 DSGVO).</li>
            <li>Sollten unrichtige personenbezogene Daten verarbeitet werden, steht Ihnen ein Recht auf Berichtigung zu (Art. 16 DSGVO).</li>
            <li>Liegen die gesetzlichen Voraussetzungen vor, so können Sie die Löschung oder Einschränkung der Verarbeitung verlangen sowie Widerspruch gegen die Verarbeitung einlegen (Art. 17, 18 und 21 Abs. 1 DSGVO).</li>
          </ul>
        </p>
        <p className="pt-20">
          Sollten Sie von Ihren zuvor genannten Rechten Gebrauch machen, wird geprüft, ob die gesetzlichen Voraussetzungen hierfür erfüllt sind.
        </p>
        <h3 className="pt-20 pb-10">6. Beschwerderecht bei der Aufsichtsbehörde:</h3>
        <p>
          Weiterhin besteht ein Beschwerderecht beim Bayerischen Landesbeauftragten für den Datenschutz. Diesen können Sie unter folgenden Kontaktdaten erreichen:
          <br/><br/>
          Der Bayerische Landesbeauftragte für den Datenschutz (BayLfD)<br/>
          Wagmüllerstraße 18<br/>
          80538 München<br/>
          Postanschrift: Postfach 22 12 19<br/>
          80502 München<br/>
          Telefon: 089 212672-0<br/>
          Telefax: 089 212672-50<br/>
          E-Mail: <a href="poststelle@datenschutz-bayern.de">poststelle@datenschutz-bayern.de</a><br/>
          Internet: <a href="https://www.datenschutz-bayern.de" target="_blank" rel="noreferrer">www.datenschutz-bayern.de</a>
        </p>
        <h3 className="pt-20 pb-10">7. Pflicht zur Bereitstellung der Daten:</h3>
        <p>
          Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Sie sind also nicht verpflichtet, uns Ihre Daten mitzuteilen.
          <br/><br/>
          Allerdings ist die Durchführung des Bewerbungsverfahrens ohne bestimmte personenbezogene Daten nicht möglich. Das heißt, wenn Sie uns die erforderlichen personenbezogenen Daten im Rahmen Ihrer Bewerbung nicht zur Verfügung stellen, können wir Ihre Bewerbung nicht bearbeiten und perspektivisch auch kein Beschäftigungsverhältnis mit Ihnen eingehen.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;


