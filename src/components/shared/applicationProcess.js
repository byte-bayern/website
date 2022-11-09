import React from "react";
import Rail from "./rail";
import Button from "./button";

export default function ApplicationProcess(props) {
  return (
    <section className="application-process content xs:p-grid-standard lg:ptl-grid-standard">
      <div className="grid grid-gap-0">
        <div className="col-12 lg:col-5">
          <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100"  data-aos="fade-up" data-aos-duration="3000">
            <div className="col-12 headline-1">
              <p>{props.title}</p>
            </div>
            <div className="col-12">
              <Rail list={props.steps} />
            </div>
            <div className="application-process-button col-12">
              <div className="width-100">
                <Button
                  gridTemplateAreas={props.buttonGridTemplateAreas}
                  iconColor={props.buttonIconColor}
                  text={props.buttontext}
                  textBackgroundColor={props.buttonTextBackgroundColor}
                  textColor={props.buttonTextColor}
                  link={props.link}
                  target={props.target}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          title={props.title}
          className="application-process-image col-12 lg:col-7"
          style={{
            ["backgroundImage"]: `url(${props.image})`,
            ["backgroundSize"]: "cover",
          }}
        ></div>
      </div>
    </section>
  );
}
