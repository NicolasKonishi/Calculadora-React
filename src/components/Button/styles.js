// styles.js ou styles.ts (dependendo de seu setup)
import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: 20px;
  input {
    width: 100%;
    padding: 10px;
    font-size: 1.5em;
    text-align: right;
  }
`;

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.2em;
  margin: 5px;
  cursor: pointer;
  border: none;
  background-color: #f0f0f0;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
