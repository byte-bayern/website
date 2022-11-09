import React from "react";
import FontSizeChanger from "react-font-size-changer";
import Helmet from "react-helmet";
import { Contrast } from "../assets/img/icons";

export const isBrowser = () => typeof window !== "undefined";

export default function Toolbar({ contrast, setContrast }) {
  const handleToggle = () => {
    setContrast(!contrast);
  };

  return (
    <>
      <Helmet>
        <script
          src="//cdn-eu.readspeaker.com/script/12745/webReader/webReader.js?pids=wr"
          type="text/javascript"
          id="rs_req_Init"
        ></script>
      </Helmet>
      <ul className="stickBlue">
      <li>
          <button className="contrast-btn bc-blue border-none" name="Kontrast"><img alt="Kontrast" src={Contrast} onClick={handleToggle} /></button>
        </li>
        <li>
        {isBrowser() && (
          <FontSizeChanger
            targets={["main .content"]}
            options={{
              stepSize: 2,
              range: 3,
            }}
            customButtons={{
              up: <button name="Vergößern" className="textBigger bc-blue border-none">A+</button>,
              down: <button name="Verkleinern" className="textSmaller bc-blue border-none">A-</button>,
            }}
          />
        )}</li>
        <li id="readspeaker_button1" className="rs_skip rsbtn rs_preserve">
          <button name="Lesen" className="border-none"> 
            <a
            rel="nofollow"
            className="rsbtn_play bc-blue "
            accessKey="L"
            title="Um den Text anzuh&ouml;ren, verwenden Sie bitte ReadSpeaker webReader"
            href="//app-eu.readspeaker.com/cgi-bin/rsent?customerid=12745&amp;lang=de_de&amp;readid=defaultLayout&amp;url=https://digitalschmiede.bayern/"
          >
            <span className="rsbtn_left rsimg rspart">
              <span className="rsbtn_text">
                <span></span>
              </span>
            </span>
          </a></button>
        </li>
      </ul>
    </>
  );
}
