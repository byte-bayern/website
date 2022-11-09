import React from "react";

export default function ColumnText(props) {
  let contentRight = <>{props.textRight}</>;
  let contentLeft = <>{props.textLeft}</>;

  let leftColumn = (
    <div className={`col-12 lg:col-4 body-1 `}>
      {props.textMiddleTitle ? (
        <div className="py-20 fw-semi-bold">{props.textMiddleTitle}</div>
      ) : null}
      {props.listMiddle ? (
        <ul>
          <div>{props.textMiddle}</div>
        </ul>
      ) : (
        <div>{props.textMiddle}</div>
      )}
    </div>
  );

  return (
    <div className="grid p-grid-standard xs:grid-gap-20 md:grid-gap-50 lg:grid-gap-100 content">
      {props.bigTitle ? (
        <div className="col-12 headline-1 fw-semi-bold">{props.bigTitle}</div>
      ) : null}
      <div
        className={`col-12 ${
          props.nrColumns === "2" ? "lg:col-6" : "lg:col-4"
        } ${props.textLeftStyle}`}
      >
        {props.textLeftTitle ? (
          <div className="py-20 fw-semi-bold">{props.textLeftTitle}</div>
        ) : null}
        {props.listLeft ? <ul>{contentLeft}</ul> : contentLeft}
      </div>
      {props.nrColumns === "3" ? leftColumn : null}
      <div
        className={`col-12 ${
          props.nrColumns === "2" ? "lg:col-6" : "lg:col-4"
        } body-1`}
      >
        {props.textRightTitle ? (
          <div className="py-20 fw-semi-bold">{props.textRightTitle}</div>
        ) : null}
        {props.listRight ? <ul>{contentRight}</ul> : contentRight}
      </div>
    </div>
  );
}
