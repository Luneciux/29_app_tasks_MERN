import styled from "styled-components";

export const TaskButtonContainerStyle = styled.div`
  background: transparent;
  margin: 36px 0px;
  padding: 18px;
  border-radius: 4px;
`;


export const TaskFormActionsStyle = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: end;

  .change{
    border-radius: 4px;
    color: #333333;
    background: #4d4d4d1f;
    padding: 8px;
    border: none;
    font-weight: 500;
  }

  .change:hover{
    background: #4d4d4d31;
    transition: 0.2s;
  }

  .change::after{
    border: none;
  }
`;

export const ActionStyle = styled.div`
  display: flex;
  font-weight: 500;
  gap: 20px;
  cursor: pointer;

`;




