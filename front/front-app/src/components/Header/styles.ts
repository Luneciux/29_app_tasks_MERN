import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #AEEBB6;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .details {
    h1 {
      color: #222020;
      font-size: 32px;
    }

    h2 {
      color: #222020c0;
      font-size: 16px;
    }
  }
`;
