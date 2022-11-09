import React from "react";

export default function SplitText(props) {
  const splitTitle = props.title.split("\n");
  return (
    <div className="count">
      {splitTitle.map((str, index) => (
        <p key={index}>
          {str}
        </p>
      ))}
    </div>
  );
}
