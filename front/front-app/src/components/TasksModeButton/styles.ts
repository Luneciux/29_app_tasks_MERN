import styled from "styled-components";

export const TaskButtonContainerStyle = styled.div`
  background: transparent;
  border-radius: 4px;
  display: flex;
  align-items: end;
`;


export const TaskFormActionsStyle = styled.div`
  font-weight: 500;

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
  font-weight: 500;
  cursor: pointer;
`;




