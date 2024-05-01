import styled from "styled-components";

export const TaskFormContainerStyle = styled.div`
  background: #f8f8f8;
  margin: 36px 0px;
  padding: 18px;
  border-radius: 4px;
`;

export const TaskFormHeaderStyle = styled.div`
  display: flex;
  gap: 8px;
`;

export const TaskFormDescriptionStyle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333333ce;
  padding: 16px 0px 16px 0px;
  text-align: justify;
`;

export const TaskFormHeaderContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const TaskFormActionsStyle = styled.div`
  display: flex;
  font-weight: 500;
  gap: 20px;

  .create{
    border-radius: 4px;
    color: #333333;
    background: #4d4d4d1f;
    padding: 8px;
  }

  .create:hover{
    background: #4d4d4d31;
    transition: 0.2s;
  }
`;

export const ActionStyle = styled.div`
  display: flex;
  font-weight: 500;
  gap: 20px;
  cursor: pointer;

`;



