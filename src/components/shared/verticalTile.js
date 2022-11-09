import React from "react";

export default function VerticalTile(props) {
  return (
    <div className="grid xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100">
      <div className="col-12">
        {props.component ? (
          <div className="pb-20">{props.component}</div>
        ) : null}
        <p className={`body-2 fw-bold ${props.className}`}>{props.title}</p>
        {props.subTitle ? <p className="body-1">{props.subTitle} </p> : null}
        {props.excerpt ? (
          <div className="py-10">
            <p
              className={
                props.excerpt.size ? `${props.excerpt.size}` : `body-1`
              }
            >
              {props.excerpt.content}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
