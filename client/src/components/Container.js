import styled from "@emotion/styled";

export const AddContainer = styled.form`
  height: 90%;
  width: 100%;
  display: flex;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
  animation-duration: 0.9s;
  animation-name: on-load;
  @keyframes on-load {
    from {
      width: 100%;
      height: 0%;
    }
    to {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CardContainer = styled.article`
  height: 140px;
  width: 280px;
  background-image: url(${({ imgsrc }) => imgsrc});
  background-size: 100% 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: auto;
  margin-top: 20px;
`;

export const PagesContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
`;
export const CardsOverviewContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 10px;
  overflow: scroll;
`;

export const ClickContainer = styled.div`
  height: 25px;
  width: 35px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  z-index: 8001;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
