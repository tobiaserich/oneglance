import React from "react";
import { HeadlineDark } from "./Headline";
import { DetailDateOutput } from "./DateOutput";
import { OutputWithOverflow } from "./DescriptionOutput";
import MemberList from "./MemberList";

export default function EventContent(props) {
  const siteContent = [
    <>
      <HeadlineDark>Member</HeadlineDark>
      <MemberList eventID={props.eventData._id} />
    </>,
    <>
      <HeadlineDark>{props.eventData.title}</HeadlineDark>
      <DetailDateOutput>
        <span>Event begin:</span>
        <span>{props.eventData.date}</span>
      </DetailDateOutput>
      <OutputWithOverflow>{props.eventData.descr}</OutputWithOverflow>
    </>,
    <>
      <HeadlineDark>Polls</HeadlineDark>
    </>,
    <>
      <HeadlineDark>Tasks</HeadlineDark>
    </>
  ];

  return siteContent[props.site];
}
