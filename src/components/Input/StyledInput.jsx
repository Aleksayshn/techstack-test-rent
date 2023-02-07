import styled from 'styled-components';

export const StyledInput = styled.div`
  display: block;
  position: relative;
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #c7bea2;
    outline: none;
    &:focus {
      border: 1px solid #9a9483;
    }
  }
  div {
    font-size: 12px;
    font-weight: 700;
    color: #eb1d36;
    position: absolute;
  }
`;
