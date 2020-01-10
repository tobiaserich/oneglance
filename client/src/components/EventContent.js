import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HeadlineDark } from "./Headline";
import { DetailDateOutput } from "./DateOutput";
import { OutputWithOverflow } from "./DescriptionOutput";
import MemberList from "./MemberList";
import { AddDetailButton } from "./Button";
import PollOverview from "./PollOverview";
import TaskOverview from "./TaskOverview";

const CustomLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  position: absolute;
  bottom: 0;
`;
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
      <PollOverview />
      <CustomLink to={`/poll/?ID=${props.eventData._id}&poll=0`}>
        <AddDetailButton>New Poll</AddDetailButton>
      </CustomLink>
    </>,
    <>
      <HeadlineDark>Tasks</HeadlineDark>
      <TaskOverview />
      <CustomLink to={`/task/?ID=${props.eventData._id}&task=0`}>
        <AddDetailButton>New Task</AddDetailButton>
      </CustomLink>
    </>
  ];

  return siteContent[props.site];
}
