import styled from "styled-components";

export const HeaderContainerStyle = styled.header`
  background: #ABD9E0;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
  padding: 16px;
`;

export const HeaderContentStyle = styled.div`
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
      margin-top: 10px;
    }
  }
`;
