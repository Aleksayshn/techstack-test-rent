import styled from 'styled-components';

export const StyledDropDown = styled.div`
  display: block;
  label {
    display: block;
    margin-bottom: 10px;

  }
  select {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #FFF;
    outline: none;
    border: 1px solid #c7bea2;

    &:focus {
      border: 1px solid #9a9483;
    }
  }
`;
