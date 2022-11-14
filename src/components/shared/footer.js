import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/img/components/brand/logo-color.svg";
import stmd from "../../assets/img/components/brand/stmdLogo.svg";
import { Up } from "../../assets/img/icons";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section-footer">
        <div className="footer-wrapper p-standard content">
          <div className="footer-item">
            <img
              className="img-h-80"
              src={logo}
              alt="digital schmiede bayern"
            ></img>
          </div>
          <div className="footer-item contact pr-75 sm:pr-0">
            <p className="email body-1 sm:pr-30">
              Fragen? Schreibe uns an: <br />
              <a href="mailto:kontakt@byte.bayern">
                kontakt@byte.bayern
              </a>
            </p>
            <br />
            <p className="address body-1  pr-xl md:pr-0">
              <strong> Hier findest Du uns: </strong>
              <br></br>
              byte - Bayerische Agentur für Digitales GmbH
              <br />
              Oskar-von-Miller-Ring 35<br />
              80333 München, Germany
            </p>
          </div>
          <div className="footer-item legal">
            <ul className="grid body-1">
              <li className="col-12  py-10 ">
                <Link to="/imprint">Impressum</Link>
              </li>
              <li className="col-12  py-10 ">
                <Link to="/data-privacy">Datenschutz</Link>
              </li>
              <li className="col-12  py-10 ">
                <Link to="/accessibility">Barrierefreiheit</Link>
              </li>
            </ul>
            
            <div className="body-1 justify-end pt-50">
              <div>
                Gefördert durch: 
              </div>
              <div>
                <a href="https://www.stmd.bayern.de/" alt="Link zur Website des bayerischen Staatsminsiterium für Digitales" target="_blank">
                  <img src={stmd} className="img-w-250"/>
                </a>
              </div>
            </div>

          </div>
          <div className="footer-item footer-button ic-40">
            <a href="#header" id="footer-button">
              <img className="icon" src={Up} alt="nach oben"></img>
              <div className="btn-text body-1">Nach oben</div>
            </a>
          </div>


        </div>
      </footer>
    );
  }
}

export default Footer;
