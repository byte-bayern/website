import React from "react";
import Button from "./button";
import { Video, Close } from "../../assets/img/icons";

export default function SharedVideo(props) {
  const button = (
    <Button
      text={props.buttontext}
      gridTemplateAreas={props.buttonGridTemplateAreas}
      textBackgroundColor={props.buttonTextBackgroundColor}
      textColor={props.buttonTextColor}
      iconColor={props.buttonIconColor}
      icon={
        props.playing ? (
          <Video className={`icon ${props.buttonIconColor}`} />
        ) : (
            <Close className={`icon ${props.buttonIconColor}`} />
          )
      }
    />
  );

  return (
    <section data-aos="fade-up" data-aos-duration="3000" id="video">
      <div className="ic-40 xl:ic-80 content xs:py-standard md:pb-grid-standard">
        {props.video && props.clickHandler ? (
          <div onClick={props.clickHandler}>
            <video
              style={{ display: "block" }}
              poster={props.poster}
              width="100%"
              name="media"
              ref={props.videoRef}
            >
              <source src={props.video} type="video/mp4" />
              <track label="Deutsch" kind="subtitles" srcLang="de" src={props.subtitles} default></track>
            </video>
            <div className="grid justify-end">
              <div className="col-12 lg:col-6">
                <div
                  className="header-button video-button px-standard background-none border-none"
                >
                  <button name={props.buttontext} className="width-100 background-none border-none">
                  {button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
