import React from "react";
import styled from "@emotion/styled";
import { HeadlineDark } from "./Headline";
import { DetailDateOutput } from "./DateOutput";
import { OutputWithOverflow } from "./DescriptionOutput";
import MemberList from "./MemberList";
import { AddDetailButton } from "./Button";
import PollOverview from "./PollOverview";
import TaskOverview from "./TaskOverview";
import LinkNoDeco from "./LinkNoDeco";

const CustomLink = styled(LinkNoDeco)`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
export default function EventContent(props) {
  const siteContent = [
    <>
      <HeadlineDark>User</HeadlineDark>
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
      <CustomLink to={`/poll/${props.eventData._id}/0`}>
        <AddDetailButton>New Poll</AddDetailButton>
      </CustomLink>
    </>,
    <>
      <HeadlineDark>Tasks</HeadlineDark>
      <TaskOverview />
      <CustomLink to={`/task/${props.eventData._id}/0`}>
        <AddDetailButton>New Task</AddDetailButton>
      </CustomLink>
    </>
  ];

  return siteContent[props.site];
}
