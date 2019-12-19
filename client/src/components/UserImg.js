import React from "react";
import styled from "@emotion/styled";
import placeholder from "../../resources/userPlaceholder.png";

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
`;

export default function UserImage(props) {
  const imgLink = props.src ? props.src : placeholder;
  return <ProfileImage src={imgLink} />;
}
