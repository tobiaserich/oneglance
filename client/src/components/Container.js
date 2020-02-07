import styled from "@emotion/styled";

export const AddContainer = styled.form`

  height: 90%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.background};
  animation-duration: 0.9s;
  animation-name: on-load;
  @keyframes on-load {
    from {
      width: 100%;
      height: 0%;
    }
    to {
      width: 100%;
      height: 90%;
    }
  }
`;

export const InformationContainer = styled.section`
  height: 400px;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.secondBackgroundTransparent};
`;

export const CardContainer = styled.article`
  height: 140px;
  width: 280px;
  position: relative;
  overflow: hidden;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-image: url(${({ background }) => background || "./images/default.webp"});
  background-size: 100% 100%;
`;

export const PagesContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  scroll-bar: none;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  animation-duration: 0.7s;
  animation-name: ${({ animation }) => (animation ? animation : "none")};
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const CardsOverviewContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export const ClickContainer = styled.div`
  height: 25px;
  width: 35px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  z-index: 8001;
`;

export const FlexContainer = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "space-around")};
  align-items: ${({ align }) => (align ? align : "")};
  margin: 0px auto;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const PageWrapper = styled(PagesContainer)`
  position: relative;
  overflow: hidden;
  background-image: url(${({ img }) => `.${img}`});
  background-size: auto 100%;
  animation-duration: 0.45s;
  animation-name: ease-in;
  @keyframes ease-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DetailContainer = styled.details`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ item, theme }) => (item % 2 === 0 ? theme.colors.active : "")};
  color: ${({ theme }) => theme.colors.darkfont};
`;

export const PollDetailContainer = styled.aside`
  width: 100%;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
`;
