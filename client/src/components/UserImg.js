import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const placeholder = "/images/userPlaceholder.webp";

const ImageWrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 5px;
  top: 5px;
  position: ${({ position }) => (position ? position : "relative")};
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export default function UserImg({ src, username, thread, children, position }) {
  const imgLink = src ? src : placeholder;
  const user = `Profile picture from ${username}`;
  const imagesize = {
    header: "40px",
    detail: "40px",
    memberList: "30px",
    test: "20px"
  };
  return (
    <ImageWrapper size={imagesize[thread]} position="absolute">
      <ProfileImage src={imgLink} alt={user} />
      {children}
    </ImageWrapper>
  );
}

UserImg.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string.isRequired,
  thread: PropTypes.string.isRequired,
  children: PropTypes.node
};
