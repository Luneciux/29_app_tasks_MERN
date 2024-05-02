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
    max-width: 500px;
    width: 100px;
    min-width: 100px;
    margin: 0;
  }

  ::-webkit-scrollbar{
    display: none;
  }

  .text-input-date{
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2em;
    font-weight: 600;
    color: #333333;
    max-width: 500px;
    min-width: 400px;
    min-height: 80px;
    margin: 0;
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
    height: fit-content;
    word-wrap: break-word;
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
    transition: 0.3s;
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




