import styled, { keyframes } from "styled-components";

const easeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const easeOut = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const TaskContainerStyle = styled.div<{ $action?: boolean; }>`
  background: #f8f8f8;
  margin-bottom: 32px;
  padding: 18px;
  border-radius: 4px;
  animation: ${ props => props.$action ? easeIn : easeOut } 0.3s ease-in normal;
`;

export const TaskHeaderStyle = styled.div`
  display: flex;
  gap: 8px;
  max-width: 80%;
  width: 80%;
`;

export const TaskTitleStyle = styled.span`
  max-width: 70%;
  width: 70%;
  word-wrap: break-word;
`;

export const TaskTimeSpanStyle = styled.span`
  width: auto;
  margin: 0px 0px 0px 20px;

`;

export const TaskDescriptionStyle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333333ce;
  padding: 16px 0px 16px 0px;
  word-wrap: break-word;
`;

export const TaskTagsStyle = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0px 10px 0px;
  flex-wrap: wrap;
`;

export const TaskHeaderContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;


export const TaskActionsStyle = styled.div`
  display: flex;
  font-weight: 500;
  gap: 20px;

  .delete{
    border-radius: 4px;
    color: #e47676ff;
    background: #e4b4b469;
    padding: 8px;
  }

  .delete:hover{
    background: #e098986e;
    transition: 0.2s;
  }

  .edit{
    border-radius: 4px;
    color: #45bb7ed3;
    padding: 8px;
    background: #78d6a63d;

  }

  .edit:hover{
    background: #6dd49f52;
    transition: 0.2s;
  }

  button {
    border: none;
    font-weight: 600;
  }

  button:disabled {
    background: #4d4d4d1f;
    color: #333333;
    cursor: default;
    transition: 0.3s;
  }

  button:disabled:hover {
    background: #4d4d4d1f;
    cursor: default;
  }

`;

export const ActionStyle = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;

`;



