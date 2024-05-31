import styled from "styled-components";

export const TagFormContainerStyle = styled.div`
  color: #50af7ec7;
  border-radius: 4px;
  padding: 4px 8px 4px 0px;
  cursor: pointer;
  font-weight: 500;
  display: flex;

  .material-symbols-outlined{
    font-weight: bolder;
    border-radius: 50%;
    padding: 2px;
  }

  .material-symbols-outlined:hover{
    background-color: #88ceaa69;
    transition: 0.2s;
  }

  input{
    border: none;
    background: transparent;
    color: #50af7ec7;
    font-weight: 600;
    width: 50%;
  }

  input::placeholder{
    color: #50af7ec7;
    font-size: 16px;
  }

  input:focus{
    box-shadow: none;
    outline: none;
  }
`;
