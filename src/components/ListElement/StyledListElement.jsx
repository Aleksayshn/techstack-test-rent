import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  border: 1px solid #c3c6c9;
  margin: 10px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  transition: ease-in 100ms;
  &:hover {
    transform: scale(1.01);
  }
`;
