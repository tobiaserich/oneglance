import React from "react";
import styled from "@emotion/styled";
import placeholder from "../../resources/userPlaceholder.png";

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
`;

export default function UserImage({ src }) {
  const imgLink = src ? src : placeholder;
  return <ProfileImage src={imgLink} />;
}
