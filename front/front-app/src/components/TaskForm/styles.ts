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

  font-size: 1.5em;
  font-weight: 600;
  color: #333333;

  .text-input-title{
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2em;
    font-weight: 600;
    color: #333333;
    margin: 0;
    resize: none;
    padding-right: 15px;
  }

  ::-webkit-scrollbar{
    display: none;
  }

  .text-input-date{
    background: transparent;
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 1.2em;
    font-weight: 600;
    color: #858585;
    margin: 0;
    resize: none;
    height: fit-content;
    padding: 0px 12px 0px 12px;
  }

  .text-input-date::-webkit-calendar-picker-indicator{
    filter: invert(56%) sepia(4%) saturate(14%) hue-rotate(61deg) brightness(94%) contrast(85%);
  }

  .time-input-separator{
    height: fit-content;
    padding: 5px 20px 0px 20px;
  }

`;

export const TaskFormDescriptionStyle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333333ce;
  padding: 16px 0px 16px 0px;
  text-align: justify;

  .text-input-description{
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
    font-size: 18px;
    font-weight: 500;
    color: #333333ce;
    padding: 16px 16px 32px 16px;
    text-align: justify;
    border-radius: 4px;
  }

  .text-input-description:focus{
    background: #cecece38;
    border: none;
    outline: none;
  }

  ::-webkit-scrollbar{
    display: none;
  }

`;

export const TaskFormHeaderContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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




