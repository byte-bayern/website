import ImageButton from "./imageButton";
import VerticalTile from "./verticalTile";
import React from "react";

export default function Card(props) {
  const { member } = props;
  return (
    <div className="col-12 sm:col-6 md:col-6 xl:col-4">
      <VerticalTile
        component={
          <ImageButton
            image={member.pic}
            buttonGridTemplateAreas={`'. . .''. . icon'`}
            buttonIconColor={member.buttonIconColor}
            link={member.link}
            target="_blank"
          />
        }
        title={member.name}
        subTitle={member.title}
        excerpt={{
          content: member.shortDescription,
          size: "body-1",
        }}
      />
    </div>
  );
}
