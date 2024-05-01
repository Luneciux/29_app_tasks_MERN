import styled from "styled-components";

export const TaskContainerStyle = styled.div`
  background: #f8f8f8;
  margin-bottom: 32px;
  padding: 18px;
  border-radius: 4px;
`;

export const TaskHeaderStyle = styled.div`
  display: flex;
  gap: 8px;
`;

export const TaskDescriptionStyle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333333ce;
  padding: 16px 0px 16px 0px;
  text-align: justify;
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
  align-items: center;
`;


export const TaskActionsStyle = styled.div`
  display: flex;
  font-weight: 500;
  gap: 20px;

  .delete{
    border-radius: 4px;
    color: #df9f9fff;
    background: #e7b8b82c;
    padding: 8px;
  }

  .delete:hover{
    background: #e4b4b446;
    transition: 0.2s;
  }

  .edit{
    border-radius: 4px;
    color: #5ac98fc5;
    padding: 8px;
    background: #88ecb825;
  }

  .edit:hover{
    background: #85ecb73d;
    transition: 0.2s;
  }
`;

export const ActionStyle = styled.div`
  display: flex;
  font-weight: 500;
  gap: 20px;
  cursor: pointer;

`;



