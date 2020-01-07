import React from "react";

import { HeadlineDark } from "./Headline";
import { DetailDateOutput } from "./DateOutput";
import { DetailDescriptionOutput } from "./DescriptionOutput";

export default function EventContent(props) {
  const siteContent = [
    <>
      <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, suscipit. </h1>
    </>,
    <>
      <HeadlineDark>{props.eventData.title}</HeadlineDark>
      <DetailDateOutput>
        <span>Event begin:</span>
        <span>{props.eventData.date}</span>
      </DetailDateOutput>
      <DetailDescriptionOutput>{props.eventData.descr}</DetailDescriptionOutput>
    </>
  ];

  return siteContent[props.site];
}
