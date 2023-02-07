import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 20px;
  background-color: #c7bea2;
  border-radius: 5px;
  transition: ease-in 100ms;
  &:hover {
    transform: scale(1.01);
  }
`;
