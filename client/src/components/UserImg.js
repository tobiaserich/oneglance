import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const placeholder = "/images/userPlaceholder.webp";

const ImageWrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 5px;
  position: relative;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export default function UserImg({ src, username, thread, children }) {
  const imgLink = src ? src : placeholder;
  const user = `Profile picture from ${username}`;
  const imagesize = {
    header: "50px",
    detail: "40px",
    test: "20px"
  };
  return (
    <ImageWrapper size={imagesize[thread]}>
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
