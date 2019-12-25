import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import DetailContainer from "./DetailContainer";

const InformationContainer = styled.section`
  height: 400px;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
`;

const CustomHeader = styled.h3`
  margin: 0;
  font-weight: 500;
`;

export default function PersonalInformation({ name, birthday, gender, address }) {
  return (
    <InformationContainer>
      <DetailContainer>
        <CustomHeader>Name</CustomHeader>
        {name}
      </DetailContainer>
      <DetailContainer>
        <CustomHeader>Birthday</CustomHeader>
        {birthday}
      </DetailContainer>

      <DetailContainer>
        <CustomHeader>Gender</CustomHeader>
        {gender}
      </DetailContainer>

      <DetailContainer>
        <CustomHeader>Adress</CustomHeader>
        {address.street} {address.houseNumber} <br />
        {address.zip} {address.city}
      </DetailContainer>
    </InformationContainer>
  );
}

PersonalInformation.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.string,
  gender: PropTypes.string,
  address: PropTypes.object
};
