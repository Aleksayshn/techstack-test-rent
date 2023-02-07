import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #9a9483;
  background-color: #9a9483;
  color: #e5dcc3;
  cursor: pointer;
  transition: ease-in 200ms;
  :hover {
    border: 1px solid #e5dcc3;
    background-color: #e5dcc3;
    color: #9a9483;
  }
`;
