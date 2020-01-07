import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HeadlineDark } from "./Headline";
import { DetailDateOutput } from "./DateOutput";
import { DetailDescriptionOutput } from "./DescriptionOutput";
import MemberList from "./MemberList";
import { AddDetailButton } from "./Button";

const CustomLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  position: absolute;
  bottom: 0;
`;
export default function EventContent(props) {
  const siteContent = [
    <>
      <HeadlineDark> Member </HeadlineDark>
      <MemberList eventID={props.eventData._id} />
    </>,
    <>
      <HeadlineDark>{props.eventData.title}</HeadlineDark>
      <DetailDateOutput>
        <span>Event begin:</span>
        <span>{props.eventData.date}</span>
      </DetailDateOutput>
      <DetailDescriptionOutput>{props.eventData.descr}</DetailDescriptionOutput>
    </>,
    <>
      <HeadlineDark>Polls</HeadlineDark>

      <CustomLink to="/poll">
        <AddDetailButton>New Poll</AddDetailButton>
      </CustomLink>
    </>,
    <>
      <HeadlineDark>Tasks</HeadlineDark>
    </>
  ];

  return siteContent[props.site];
}
