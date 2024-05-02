import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
  align-items: center;

  .material-symbols-outlined{
    font-weight: 600;
  }

  .text-input{
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: fit-content;
    word-wrap: break-word;
    font-size: 18px;
    font-weight: 500;
    color: #333333ce;
    align-items: center;
    border-radius: 4px;
  }

  .text-input:focus{
    background: transparent;
    border: none;
    outline: none;
  }

`;
