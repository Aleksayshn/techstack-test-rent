import styled from 'styled-components';

export const StyledTextarea = styled.div`
  display: block;
  position: relative;
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  textarea {
    resize: none;
    display: block;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #c7bea2;
    outline: none;
    &:focus {
     outline: none;
    }
    &:active {
     outline: none;
    }
  }
  div {
    font-size: 12px;
    font-weight: 700;
    color: #74777c;
    position: absolute;
  }
`;